package com.api.spring.boot.funsho.api.resource;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import com.api.spring.boot.funsho.api.entity.users;
import com.api.spring.boot.funsho.api.entity.requestsEntity.donateRequest;
import com.api.spring.boot.funsho.api.entity.requestsEntity.usersRequest;
import com.api.spring.boot.funsho.api.entity.wallet.wallet;
import com.api.spring.boot.funsho.api.repository.userRepository;
import com.api.spring.boot.funsho.api.repository.usersRequestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;



@RestController
@CrossOrigin
public class usersRequestResource {

    public static final String folderPath =  "incoming-files//";
    public static final Path filePath = Paths.get(folderPath);    
    
    @Autowired
    usersRequestRepository UsersRequestRepository;

    @Autowired
    userRepository UserRepository;

    @GetMapping("/arshad")
    public simpleJson arshad(){

        System.out.println("API Call");

        return new simpleJson("hello");
    }

    @GetMapping("/topthreerequests")
    public List<usersRequest> getUsersRequests(){
        Pageable firstPage = PageRequest.of(0, 3, Sort.by("amountRecieved").descending());
        List<usersRequest>  page = UsersRequestRepository.findAll(firstPage).getContent();        
        return page;
    }    

    @PostMapping("/donatereq")
    public wallet donateToRequest(@RequestBody donateRequest request){

        System.out.println("123");
        System.out.println("123");
        System.out.println("123");
        users handlingUser = UserRepository.findBySessionKey(request.getSessionId());
        System.out.println("123");
        System.out.println("123");
        System.out.println("123");
        wallet handlingUserWallet = handlingUser.getWallet();

        System.out.println("123");
        System.out.println("123");
        System.out.println("123");

        usersRequest handlingRequests = UsersRequestRepository.findByRequestId(request.getRequestId());

        System.out.println("123");
        System.out.println("123");
        System.out.println("123");
        if(handlingRequests.getAmountRecieved() >=handlingRequests.getAmountRequired()){
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

        handlingRequests.setAmountRecieved(handlingRequests.getAmountRecieved()+request.getDonationAmount());
        UsersRequestRepository.save(handlingRequests);

        return handlingUser.getWallet();
    }

    @GetMapping("/singlerequest/{id}")
    public usersRequest getUsersSingleRequests(@PathVariable("id") long id){        
        usersRequest  result = UsersRequestRepository.findByRequestId(id);
        return result;
    }   

    @GetMapping("/usersrequests/{id}")
    public List<usersRequest> getUsersRequests(@PathVariable("id") int id){
        Pageable pageFormat = PageRequest.of(id, 8, Sort.by("amountRecieved").descending());
        List<usersRequest>  page = UsersRequestRepository.findAll(pageFormat).getContent();        
        return page;
    }   

    @PostMapping("/usersrequests")
    public usersRequest saveUsersRequests(@RequestBody usersRequest obj){
        System.out.println();
        System.out.println(obj.toString());
        System.out.println();
        obj.setVotes(0l);
        obj.setAmountRecieved(0l);        
        return UsersRequestRepository.save(obj);
    }


    // Save File and return url Starts 

    @PostMapping("/savefile")
    public String uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            createDirIfNotExist();

            byte[] bytes = new byte[0];
            bytes = file.getBytes();
            String newName = new Date().hashCode()+file.getOriginalFilename();
            Files.write(Paths.get(folderPath + newName), bytes);
            return newName;
            // return ResponseEntity.status(HttpStatus.OK)
            //         .body(newName);
        } catch (Exception e) {
            // return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED)
            //         .body("Exception occurred for: " + file.getOriginalFilename() + "!");
            return "failed";
        }
    }

    private void createDirIfNotExist() {
        //create directory to save the files
        File directory = new File(folderPath);
        if (!directory.exists()) {
            directory.mkdir();
        }
    }

    @GetMapping("/files")
    public ResponseEntity<String[]> getListFiles() {
        return ResponseEntity.status(HttpStatus.OK)
                .body(new java.io.File(folderPath).list());
    }

    // Save File Ends...
}
