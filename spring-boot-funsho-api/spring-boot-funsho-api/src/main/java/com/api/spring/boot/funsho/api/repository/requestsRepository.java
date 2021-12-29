package com.api.spring.boot.funsho.api.repository;

import java.util.List;

import com.api.spring.boot.funsho.api.entity.requests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface requestsRepository extends JpaRepository<requests,Long> {

    @Query(
        value = "SELECT username,title,request_info,bonafide_url,additional_url,votes,amount_already,total_amount,requested_date,request_id from public.users right join requests on users.user_id = requests.user_id where users.user_id = requests.user_id",
        nativeQuery = true
    )
    List<Object> getAllRequests();

    @Query(
        value = "SELECT username,title,request_info,bonafide_url,additional_url,votes,amount_already,total_amount,requested_date,request_id from public.users right join requests on users.user_id = requests.user_id where requests.user_id=?1",
        nativeQuery = true
    )
    List<Object> getAllRequestsById(Long userId);


    @Query(
        value = "SELECT username,title,request_info,bonafide_url,additional_url,votes,amount_already,total_amount,requested_date,request_id from public.users right join requests on users.user_id = requests.user_id where requests.request_id=?1",
        nativeQuery = true
    )
    Object getRequestsByReqId(Long reqId);

    public requests findByRequestId(Long requestId);
}
