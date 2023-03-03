package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.LocalAddress;

@Repository
public interface LocalAddressRepository extends JpaRepository<LocalAddress, Integer>{

}
