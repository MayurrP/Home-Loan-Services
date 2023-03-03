package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.EMIDetails;

@Repository
public interface EMIDetailsRepository extends JpaRepository<EMIDetails, Integer>{

}
