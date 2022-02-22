package com.api.spring.boot.funsho.api.repository;

import java.util.List;

import com.api.spring.boot.funsho.api.entity.requestsEntity.usersRequest;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface usersRequestRepository extends JpaRepository<usersRequest,Long>{

    usersRequest findByRequestId(long requestId);

    List<usersRequest> findByRequestIdNot(Long requestId,Pageable pageable);

    List<usersRequest> findByUserIdNot(long id, Pageable pageFormat);
    

    
}
