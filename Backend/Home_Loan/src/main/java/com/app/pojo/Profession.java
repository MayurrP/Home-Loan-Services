 package com.app.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Profession {
	
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Integer professionid;
	private String professiontype;
	private Double professionsalary;
	private String professionsalaryType;
	private String professionworkingperiod;
	private String professionDesignation;
	@Lob
	private byte[] professionsalaryslips;


}










