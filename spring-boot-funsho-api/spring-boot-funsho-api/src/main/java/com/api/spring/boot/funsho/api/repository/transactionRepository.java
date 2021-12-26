package com.api.spring.boot.funsho.api.repository;

import com.api.spring.boot.funsho.api.entity.wallet.transaction;

import org.springframework.data.jpa.repository.JpaRepository;

public interface transactionRepository extends JpaRepository<transaction,Long>{
    
}
