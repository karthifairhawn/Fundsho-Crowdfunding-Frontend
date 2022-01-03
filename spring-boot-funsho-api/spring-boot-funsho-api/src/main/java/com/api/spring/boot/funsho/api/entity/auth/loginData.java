package com.api.spring.boot.funsho.api.entity.auth;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class loginData {
    

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long loginDataId;

    Long userId;
    String oldLogin;
    String previousLogin;
    String currentLogin;

}
  