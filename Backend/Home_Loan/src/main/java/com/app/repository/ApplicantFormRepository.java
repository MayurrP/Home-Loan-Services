package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.ApplicantForm;

@Repository
public interface ApplicantFormRepository extends JpaRepository<ApplicantForm, Integer> {

}
