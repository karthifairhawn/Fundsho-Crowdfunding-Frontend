package com.api.spring.boot.funsho.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Size;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class requests{

    @Id
    @GeneratedValue
    Long requestId;
    int userId;

    @Column(length = 1337)
    String title;
    
    @Column(length = 1337)
    String requestInfo;


    Date deadLine;
    Date requestedDate;
    int votes;
    int totalAmount;
    int amountAlready;
    int amountRequired;

    String bonafideUrl;
    String additionalUrl;


}
