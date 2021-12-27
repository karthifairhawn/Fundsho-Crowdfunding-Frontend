package com.api.spring.boot.funsho.api.resource;

import com.api.spring.boot.funsho.api.entity.requests;
import com.api.spring.boot.funsho.api.repository.requestsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
public class requestsResource {

    @Autowired
    requestsRepository RequestsRepository;

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

    @PostMapping("/requests")
    public void addNewRequests(@RequestBody requests req){
        req.setVotes(0);
        req.setRequestedDate(new Date());
        RequestsRepository.save(req);
    }
}
