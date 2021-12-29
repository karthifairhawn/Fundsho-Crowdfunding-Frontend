package com.api.spring.boot.funsho.api.resource;

import com.api.spring.boot.funsho.api.entity.requests;
import com.api.spring.boot.funsho.api.entity.users;
import com.api.spring.boot.funsho.api.entity.requestsEntity.donateRequest;
import com.api.spring.boot.funsho.api.entity.wallet.wallet;
import com.api.spring.boot.funsho.api.repository.requestsRepository;
import com.api.spring.boot.funsho.api.repository.userRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
public class requestsResource {

    @Autowired
    requestsRepository RequestsRepository;

    @Autowired
    userRepository UserRepository;
    
    @GetMapping("/requests")
    public List<Object> getAllRequests(){
        return  RequestsRepository.getAllRequests();
    }

    @GetMapping("/requests/{userId}")
    public List<Object> getAllRequests(@PathVariable Long userId){
        return  RequestsRepository.getAllRequestsById(userId);
    }

    @GetMapping("/requeststemplate")
    public List<requests> getAllTemplateRequests(){
        return  RequestsRepository.findAll();
    }

    @GetMapping("/requestsbyrid/{reqId}")
    public Object getRequestsByReqId(@PathVariable Long reqId){
        return  RequestsRepository.getRequestsByReqId(reqId);
    }

    @PostMapping("/requests")
    public void addNewRequests(@RequestBody requests req){
        req.setVotes(0l);
        req.setRequestedDate(new Date());
        req.setAmountRequired(req.getTotalAmount());
        req.setAmountAlready(0l);        
        RequestsRepository.save(req);
    }

    @PostMapping("/donate")
    public wallet donateToRequests(@RequestBody donateRequest request){

        users handlingUser = UserRepository.findBySessionKey(request.getSessionId());
        wallet handlingUserWallet = handlingUser.getWallet();

        requests handlingRequests = RequestsRepository.findByRequestId(request.getRequestId());
        if(handlingRequests.getAmountAlready()>=handlingRequests.getTotalAmount()){
            System.out.println("Already Req dumbed");
            return handlingUserWallet;
        }

        

        users recievingUser = UserRepository.findByUserId(handlingRequests.getUserId());
        wallet recievingUserWallet = recievingUser.getWallet();
        
        if(handlingUser.getUserId()==recievingUser.getUserId()) return recievingUserWallet;
    

        if(handlingUser.getWallet().getBalance()<request.getDonationAmount()) return handlingUserWallet;
        

                
        recievingUserWallet.setBalance(recievingUserWallet.getBalance()+request.getDonationAmount());  // Update Reciever Balance (Working)                
        UserRepository.save(recievingUser);

        handlingUserWallet.setBalance(handlingUserWallet.getBalance()-request.getDonationAmount());        
        UserRepository.save(handlingUser);
                        
        handlingRequests.setAmountAlready(handlingRequests.getAmountAlready()+request.getDonationAmount());        
        RequestsRepository.save(handlingRequests);

        return handlingUserWallet;
    }
}

