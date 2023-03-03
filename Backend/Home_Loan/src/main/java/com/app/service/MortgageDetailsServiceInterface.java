package com.app.service;

import java.util.List;

import com.app.pojo.MortgageDetails;

public interface MortgageDetailsServiceInterface{

	public MortgageDetails saveMortgageDetails(MortgageDetails mortgage);

	public List<MortgageDetails> getAllMortgageDetails();

	public MortgageDetails getSingleMortgageDetails(Integer mortgageId);

	public void deleteMortgageDetails(Integer mortgageId);

	public MortgageDetails updateMortgageDetails(MortgageDetails mortgage);

	

	
	

}
