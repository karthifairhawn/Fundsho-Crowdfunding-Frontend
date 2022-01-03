package com.api.spring.boot.funsho.api.entity.wallet;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class recievedLogin {
    Long userId;
    
    String ip;
    String device;
    String country_code;
    String country_name;
    String region_code;
    String region_name;
    String city;
    String zip_code;
    String time_zone;
    String latitude;
    String longitude;
    String metro_code;
}    
    
