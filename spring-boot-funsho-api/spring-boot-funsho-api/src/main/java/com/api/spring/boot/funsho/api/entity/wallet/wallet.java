package com.api.spring.boot.funsho.api.entity.wallet;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.api.spring.boot.funsho.api.entity.users;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class wallet {
    
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long walletId;

    Long Balance;

    @JsonIgnore
    @OneToOne(
        cascade= CascadeType.ALL,
        fetch= FetchType.EAGER
    )
    @JoinColumn(
        name="user_id",
        referencedColumnName="userId"
    ) 
    private users user;


    @OneToMany(
        cascade = CascadeType.ALL
    )
    @JoinColumn(
        name = "wallet_id",
        referencedColumnName="walletId"
    )
    private List<transaction> Transaction;
}
