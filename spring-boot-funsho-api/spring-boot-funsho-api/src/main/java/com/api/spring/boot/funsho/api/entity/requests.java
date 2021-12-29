package com.api.spring.boot.funsho.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class requests{    

    @Id
    @GeneratedValue
    Long requestId;
    Long userId;

    @Column(length = 1337)
    String title;
    
    @Column(length = 1337)
    String requestInfo;


    Date deadLine;
    Date requestedDate;
    Long votes;
    Long totalAmount;
    Long amountAlready;

    String bonafideUrl;
    String additionalUrl;


}
