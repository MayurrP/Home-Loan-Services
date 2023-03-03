package com.app.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class DependentInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer dependentInfoId;
	private String fatherName;
	private String motherName;
	private Integer noOfFamilyMember;
	private Integer noOfChild;
	private  String maritalStatus;
	private Integer dependentMember;
	private Double familyIncome;
    private  String spouseName;
}


