package com.api.spring.boot.funsho.api.entity.wallet;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class transaction {
    
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long transactionId; 

    
    
    String reason;
    Long amount;
    Boolean status;
    Date timestamp;    
    String direction;

}
