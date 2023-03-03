package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.GuarantorDetails;
import com.app.service.GuarantorDetailsServiceInterface;
@CrossOrigin("*")
@RestController
@RequestMapping("/GuarantorDetails")
public class GuarantorDetailsController {
	
	@Autowired
	GuarantorDetailsServiceInterface guarantordetailsserviceInterface;
	//http://localhost:9595/GuarantorDetails/guarantordetails
	@PostMapping(value="/guarantordetails")
	public GuarantorDetails saveGuarantorDetails(@RequestBody GuarantorDetails guarantordetails)
	{
		
		System.out.println("guarantor:"+guarantordetails.getGuarantorJobDetails());
		GuarantorDetails guarantorDetails=guarantordetailsserviceInterface.saveGuarantorDetails(guarantordetails);
		
		
		return guarantorDetails;
	}
	
	
	@GetMapping(value="/guarantordetails")
	public List<GuarantorDetails> getAllGuarantorDetails()
	{
		List<GuarantorDetails>GuarantorDetails=guarantordetailsserviceInterface.getAllGuarantorDetails();
		return GuarantorDetails;
	}
	
	@GetMapping(value="/guarantordetails/{GuarantorId}")
	public Optional<GuarantorDetails> getSingleGuarantorDetails(@PathVariable Integer GuarantorId)
	{
		Optional<GuarantorDetails> guarantorDetails= guarantordetailsserviceInterface.getGuarantorDetails(GuarantorId);
		return guarantorDetails;
	}
	
	@DeleteMapping("/guarantordetails/{GuarantorId}")
	public void deleteGuarantorDetails(@PathVariable Integer GuarantorId)
	{
		guarantordetailsserviceInterface.deleteGuarantorDetails(GuarantorId);
		
	}
	
	@PutMapping(value="guarantordetails/{GuarantorId}")
	public GuarantorDetails updateGuarantorDetails(@PathVariable Integer GuarantorId,@RequestBody GuarantorDetails guarantordetails  )
	{
		GuarantorDetails guarantor=guarantordetailsserviceInterface.updateGuarantorDetails( GuarantorId,guarantordetails);
		return guarantor;
	}
	

}
