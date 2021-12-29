package com.api.spring.boot.funsho.api.repository;

import com.api.spring.boot.funsho.api.entity.users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<users,Long> {

    public users findByEmail(String username);
    public users findByUserId(Long userId);
    public users findBySessionKey(String sessionKey);

    
}
