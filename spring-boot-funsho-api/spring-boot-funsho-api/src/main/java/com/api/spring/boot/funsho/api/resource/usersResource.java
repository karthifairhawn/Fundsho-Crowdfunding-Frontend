package com.api.spring.boot.funsho.api.resource;

import javax.servlet.http.HttpServletRequest;

import com.api.spring.boot.funsho.api.entity.changePassword;
import com.api.spring.boot.funsho.api.entity.login;
import com.api.spring.boot.funsho.api.entity.users;
import com.api.spring.boot.funsho.api.exceptions.oldPasswordWrong;
import com.api.spring.boot.funsho.api.exceptions.userNotFoundException;
import com.api.spring.boot.funsho.api.repository.userRepository;
import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class usersResource {

    @Autowired
    userRepository UserRepository;
    private HttpServletRequest request;

    @Autowired
    public void setRequest(HttpServletRequest request) {
        this.request = request;
    }

    @GetMapping("/users")
    public MappingJacksonValue findAll()
    {
        MappingJacksonValue mapping = new MappingJacksonValue(UserRepository.findAll());
        mapping.setFilters(passwordFilter());
        return mapping;
    }

    @PostMapping("/users")
    public void saveUsers(@RequestBody users user){

        UserRepository.save(user);
    }

    @PostMapping("/updateuser")
    public void updateUser(@RequestBody users user){
        users found = UserRepository.findByUserId(user.getUserId());
        user.setPassword(found.getPassword());
        System.out.println(user.toString());
        UserRepository.save(user);
    }

    @PostMapping("/updatepass")
    public void updatePassword(@RequestBody changePassword newPass){
        users found = UserRepository.findByEmail(newPass.getEmail());

        if(!found.getPassword().equals(newPass.getOldPassword())){
            throw new oldPasswordWrong("Old Password Does");
        }

        found.setPassword(newPass.getPassword());
        UserRepository.save(found);
    }

    @PostMapping("/auth")
    public MappingJacksonValue authUsers(@RequestBody @NotNull login user) throws Exception {
        users found = UserRepository.findByEmail(user.getEmail());
        if(found==null){
            throw new userNotFoundException("User Not Found");
        }
        if(found.getPassword().equals(user.getPassword())){
            String ipAddress = "";
            if (request != null) {
                ipAddress = request.getHeader("X-FORWARDED-FOR");
                if (ipAddress == null || "".equals(ipAddress)) {
                    ipAddress = request.getRemoteAddr();
                }
            }
            System.out.println(ipAddress);
            MappingJacksonValue mapping = new MappingJacksonValue(found);
            mapping.setFilters(passwordFilter());
            return mapping;
        }
        throw new userNotFoundException("User Not Found");
    }

    public FilterProvider passwordFilter(){
        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept(
                "fname","lname","dob","email","phNumber","username","userId"
        );

        FilterProvider filters = new SimpleFilterProvider().addFilter("passwordFilter", filter);
        return filters;
    }



}
