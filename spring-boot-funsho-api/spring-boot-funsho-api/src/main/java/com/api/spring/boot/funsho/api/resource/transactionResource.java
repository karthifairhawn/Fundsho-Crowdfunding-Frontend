// package com.api.spring.boot.funsho.api.resource;

// import com.api.spring.boot.funsho.api.entity.users;
// import com.api.spring.boot.funsho.api.entity.wallet.addMoneyTransaction;
// import com.api.spring.boot.funsho.api.entity.wallet.transaction;
// import com.api.spring.boot.funsho.api.repository.transactionRepository;
// import com.api.spring.boot.funsho.api.repository.userRepository;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// @RestController
// public class transactionResource {
    
//     @Autowired
//     transactionRepository TransactionRepository;

//     @Autowired
//     userRepository UserRepository;

//     @PostMapping("/addmoney")
//     public void addTransaction(@RequestBody addMoneyTransaction data){
//         users user = UserRepository.findBySessionKey(data.getSessionId());
//         // if(user != null){
//         //     transaction.builder().walletId(data.getWalletId()).Reason("Add to wallet").amount(data.getAmount()).status(data.getStatus()).direction("in").build();
//         // }
//     }
// }
