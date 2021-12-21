package com.api.spring.boot.funsho.api.resource;

import com.api.spring.boot.funsho.api.entity.login;
import com.api.spring.boot.funsho.api.entity.users;
import com.api.spring.boot.funsho.api.exceptions.userNotFoundException;
import com.api.spring.boot.funsho.api.repository.userRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
public class usersResource {

    @Autowired
    userRepository UserRepository;

    @GetMapping("/users")
    public List<users> findAll(){
        return UserRepository.findAll();
    }

    @PostMapping("/users")
    public void saveUsers(@RequestBody users user){
        UserRepository.save(user);
    }

    @PostMapping("/auth")
    public users authUsers(@RequestBody @NotNull login user) throws Exception {
        users found = UserRepository.findByEmail(user.getEmail());
        if(found==null){
            throw new userNotFoundException("User Not Found");
        }
        if(found.getPassword().equals(user.getPassword())) return found;
        System.out.println(found.getPassword()+" "+user.getPassword());
        System.out.println(user.toString());
        throw  new Exception("User Not Found");
    }



}
