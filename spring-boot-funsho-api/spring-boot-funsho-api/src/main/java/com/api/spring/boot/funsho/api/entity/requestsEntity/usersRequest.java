package com.api.spring.boot.funsho.api.entity.requestsEntity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class usersRequest {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long requestId;
    Long userId;    
    Long votes;
    Long amountRecieved;
    
    

    // Personal Information 

    String fname;
    String lname;
    String gender;
    String identityUrl;
    String fatherName;
    String fatherOccupation;
    Long annualSalary;
    Date dateOfBirth;

    // Educational Information

    String institutionName; 
    String studyProgram;
    String institutePlace;
    String CGPA;


    // Contact Information

    Long phoneNumber;
    String address;
    String city;
    String pinCode;
    String stateRegion;
    String personalEmail;

    // Event Information

    
    String imageUrl;
    String eventTitle;
    Long amountRequired;
    Date deadLine;
    String bonafideUrl;
    String additionalLinks;
    String eventDescription;


}
