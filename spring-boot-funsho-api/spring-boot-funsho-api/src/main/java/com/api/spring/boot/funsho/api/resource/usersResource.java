package com.api.spring.boot.funsho.api.resource;

import java.util.ArrayList;
import java.util.Date;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;


import com.api.spring.boot.funsho.api.entity.changePassword;
import com.api.spring.boot.funsho.api.entity.login;
import com.api.spring.boot.funsho.api.entity.loginData;
import com.api.spring.boot.funsho.api.entity.users;
import com.api.spring.boot.funsho.api.entity.wallet.transaction;
import com.api.spring.boot.funsho.api.entity.wallet.wallet;
import com.api.spring.boot.funsho.api.exceptions.oldPasswordWrong;
import com.api.spring.boot.funsho.api.exceptions.userNotFoundException;
import com.api.spring.boot.funsho.api.repository.loginDataRepository;
import com.api.spring.boot.funsho.api.repository.userRepository;
import com.api.spring.boot.funsho.api.repository.walletRepository;
import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class usersResource {

    @Autowired
    userRepository UserRepository;
    private HttpServletRequest request;

    @Autowired
    walletRepository WalletRepository;

    @Autowired
    loginDataRepository LoginDataRepository;


    @Autowired
    public void setRequest(HttpServletRequest request) {
        this.request = request;
    }


    // @GetMapping("/hello")
    // public simpleJson hello() {
    //     return new simpleJson();
    // }

    
    @GetMapping("/hello")
    public ResponseEntity<String> listAllHeaders(
        @RequestHeader Map<String, String> headers) {
        headers.forEach((key, value) -> {
            System.out.println(String.format("Header '%s' = %s", key, value));
        });

        return new ResponseEntity<String>(String.format("Listed %d headers", headers.size()), HttpStatus.OK);
    }

    @GetMapping("/users")
    public MappingJacksonValue findAll()
    {
        MappingJacksonValue mapping = new MappingJacksonValue(UserRepository.findAll());
        mapping.setFilters(passwordFilter());
        return mapping;
    }

    @GetMapping("/getuser/{sessionKey}")
    public MappingJacksonValue findUposingSessonKey(@PathVariable String sessionKey)
    {
        System.out.println(sessionKey);
        MappingJacksonValue mapping = new MappingJacksonValue(UserRepository.findBySessionKey(sessionKey));
        mapping.setFilters(passwordFilter());
        return mapping;
       
    }

    @PostMapping("/users")
    public MappingJacksonValue saveUsers(@RequestBody users user){

        UserRepository.save(user);
        users newUser = UserRepository.findByEmail(user.getEmail());

        loginData newLoginData = loginData.builder()
                                .userId(newUser.getUserId())                                
                                .build();
        LoginDataRepository.save(newLoginData);

        MappingJacksonValue mapping = new MappingJacksonValue(newUser);
        mapping.setFilters(passwordFilter());
        

        wallet newWallet = wallet.builder()
                            .Balance(0l)
                            .user(newUser)
                            .Transaction(new ArrayList<transaction>())
                            .build();

        WalletRepository.save(newWallet);
        return mapping;
        
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
            String newSessionKey = (ipAddress+new Date()).hashCode()+"";
            found.setSessionKey(newSessionKey);
            UserRepository.save(found);
            MappingJacksonValue mapping = new MappingJacksonValue(found);
            mapping.setFilters(passwordFilter());
            return mapping;
        }
        throw new userNotFoundException("User Not Found");
    }

    public FilterProvider passwordFilter(){
        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept(
                "fname","lname","dob","email","phNumber","username","userId","wallet","sessionKey"
        );

        FilterProvider filters = new SimpleFilterProvider().addFilter("passwordFilter", filter);
        return filters;
    }



}
