package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.Cibil;

@Repository
public interface CibilRepository extends JpaRepository<Cibil, Integer> {

}
