package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.Profession;

@Repository
public interface ProfessionRepository extends JpaRepository<Profession, Integer> {

}
