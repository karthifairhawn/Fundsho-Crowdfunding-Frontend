package com.api.spring.boot.funsho.api.resource;

import java.util.Date;
import java.util.List;


import com.api.spring.boot.funsho.api.entity.users;
import com.api.spring.boot.funsho.api.entity.wallet.addMoneyTransaction;
import com.api.spring.boot.funsho.api.entity.wallet.transaction;
import com.api.spring.boot.funsho.api.entity.wallet.wallet;
import com.api.spring.boot.funsho.api.repository.userRepository;
import com.api.spring.boot.funsho.api.repository.walletRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;





@RestController
@CrossOrigin
public class walletResource {
    
    @Autowired
    walletRepository WalletRepository;

    @Autowired
    userRepository UserRepository;

    // @GetMapping("/getwallet/{userId}")
    // public wallet getWallet(@PathVariable Long userId){
    //     return WalletRepository.findWalletByUserId(userId);
    // }

    @PostMapping("/addmoney")
    public void addTransaction(@RequestBody addMoneyTransaction data){        
        users user = UserRepository.findBySessionKey(data.getSessionId());
        if(user == null) return;

        transaction curr =  transaction.builder()
                    .reason("Add to wallet")
                    .amount(data.getAmount())
                    .status(data.getStatus())
                    .direction("in")
                    .timestamp(new Date())
                    .build();  
                                      
        wallet userWallet = WalletRepository.findWalletByFUserId(data.getUserId());
        List<transaction> temp = userWallet.getTransaction();            
        temp.add(curr);
        if(data.getStatus().equals(true)) userWallet.setBalance(userWallet.getBalance()+data.getAmount());
        WalletRepository.save(userWallet); 
            
                 
    }   


    @PostMapping("/addwallet")
    public void saveNewWallet(@RequestBody wallet w){
        WalletRepository.save(w);
    }
    
}
