package com.api.spring.boot.funsho.api.repository;
import com.api.spring.boot.funsho.api.entity.auth.loginData;

import org.springframework.data.jpa.repository.JpaRepository;

public interface loginDataRepository extends JpaRepository<loginData,Long>{

    loginData findByUserId(Long userId);
    
}
