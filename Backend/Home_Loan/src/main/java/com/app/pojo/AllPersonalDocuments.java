package com.app.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AllPersonalDocuments {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer documentID;
	@Lob
	private byte[] addressProof;
	@Lob
	private byte[] panCard;
	@Lob
	private byte[] incomeTax;
	@Lob
	private byte[] addharCard;
	@Lob
	private byte[] photo;
	@Lob
	private byte[] signature;
	@Lob
	private byte[] thumb;
	@Lob
	private byte[] bankCheque;
	@Lob
	private byte[] salarySlips;
	
	

}
