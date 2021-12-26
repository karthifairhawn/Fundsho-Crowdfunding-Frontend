package com.api.spring.boot.funsho.api.entity.wallet;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class addMoneyTransaction {
    String sessionId;
    Long userId;
    Long amount;
    Boolean status;
    String direction;
    Long walletId;
}
