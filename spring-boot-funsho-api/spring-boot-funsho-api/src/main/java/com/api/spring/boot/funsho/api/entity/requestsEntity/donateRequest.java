package com.api.spring.boot.funsho.api.entity.requestsEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class donateRequest {
    Long donationAmount;
    Long requestId;
    String sessionId;
}
