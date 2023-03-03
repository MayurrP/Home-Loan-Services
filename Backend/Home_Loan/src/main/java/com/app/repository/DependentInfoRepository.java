package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.DependentInfo;

@Repository
public interface DependentInfoRepository extends JpaRepository<DependentInfo, Integer> {

}
