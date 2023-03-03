package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.PropertyAddress;


@Repository
public interface PropertyAddressRepository extends JpaRepository<PropertyAddress, Integer> {

}
