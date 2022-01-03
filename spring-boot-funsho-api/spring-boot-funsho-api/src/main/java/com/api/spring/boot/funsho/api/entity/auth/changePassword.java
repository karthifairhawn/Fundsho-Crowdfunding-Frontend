package com.api.spring.boot.funsho.api.entity.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class changePassword {
    String oldPassword;
    String password;
    String userId;
    String email;
}
