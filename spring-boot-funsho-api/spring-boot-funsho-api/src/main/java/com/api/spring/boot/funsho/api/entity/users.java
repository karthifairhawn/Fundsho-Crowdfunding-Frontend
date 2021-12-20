package com.api.spring.boot.funsho.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class users {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long uId;

    String fname;
    String lname;
    Date dob;
    String email;
    String phNumber;

    @JsonIgnore
    String password;
    String username;
}
