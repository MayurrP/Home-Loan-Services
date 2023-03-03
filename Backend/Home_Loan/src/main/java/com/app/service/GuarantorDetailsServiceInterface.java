package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojo.GuarantorDetails;

public interface GuarantorDetailsServiceInterface {

	 public GuarantorDetails saveGuarantorDetails(GuarantorDetails guarantordetails);

	public List<GuarantorDetails> getAllGuarantorDetails();

	public Optional<GuarantorDetails> getGuarantorDetails(Integer guarantorId);

	public void deleteGuarantorDetails(Integer guarantorId);

	public GuarantorDetails updateGuarantorDetails(Integer guarantorId, GuarantorDetails guarantordetails);

}
