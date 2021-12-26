package com.api.spring.boot.funsho.api.repository;

import java.util.List;

import com.api.spring.boot.funsho.api.entity.requests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface requestsRepository extends JpaRepository<requests,Long> {

    @Query(
        value = "SELECT username,title,request_info,bonafide_url,additional_url,votes,amount_already,amount_required,total_amount,requested_date from public.users right join requests on users.user_id = requests.user_id where users.user_id = requests.user_id",
        nativeQuery = true
    )
    List<Object> getAllRequests();
}
