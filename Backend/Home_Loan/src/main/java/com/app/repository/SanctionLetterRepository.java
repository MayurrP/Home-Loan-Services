package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.SanctionLetter;

@Repository
public interface SanctionLetterRepository extends JpaRepository<SanctionLetter, Integer> {

}
