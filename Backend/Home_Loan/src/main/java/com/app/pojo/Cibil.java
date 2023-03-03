package com.app.pojo;

import javax.persistence.Entity;

import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Cibil {
	@Id
	private Integer cibilId;
	private Integer cibilScore;
	private String cibilScoreDateTime;
	private String status;
	private String remark;
	
}



