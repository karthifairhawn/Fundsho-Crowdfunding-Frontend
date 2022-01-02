package com.api.spring.boot.funsho.api.repository;

import com.api.spring.boot.funsho.api.entity.requestsEntity.usersRequest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface usersRequestRepository extends JpaRepository<usersRequest,Long>{

    usersRequest findByRequestId(long requestId);
    

    
}
