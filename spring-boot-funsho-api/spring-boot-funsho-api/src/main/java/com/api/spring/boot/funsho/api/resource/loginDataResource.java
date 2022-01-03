package com.api.spring.boot.funsho.api.resource;

import java.util.Date;

import com.api.spring.boot.funsho.api.entity.auth.loginData;
import com.api.spring.boot.funsho.api.entity.wallet.recievedLogin;
import com.api.spring.boot.funsho.api.repository.loginDataRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin
@RestController
public class loginDataResource {
    
    
    @Autowired
    loginDataRepository LoginDataRepository;

    @GetMapping("/logindata/{userId}")
    public loginData getUserLoginData(@PathVariable Long userId){
        return LoginDataRepository.findByUserId(userId);    
    }

    @PostMapping("/logindata")
    public void saveLoginData(@RequestBody recievedLogin value){
        System.out.println(value.toString());
        loginData LoginData = LoginDataRepository.findByUserId(value.getUserId()); 
        LoginData.setOldLogin(LoginData.getPreviousLogin());
        LoginData.setPreviousLogin(LoginData.getCurrentLogin());

        String newLogin = value.getIp()+"+"+value.getCountry_name()+" - "+value.getRegion_name()+"+"+new Date()+"+"+value.getDevice();

        LoginData.setCurrentLogin(newLogin);
        LoginDataRepository.save(LoginData);
    }
}
