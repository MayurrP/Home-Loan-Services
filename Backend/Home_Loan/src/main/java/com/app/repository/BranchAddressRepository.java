package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.BranchAddress;

@Repository
public interface BranchAddressRepository extends JpaRepository<BranchAddress, Integer>{

}
