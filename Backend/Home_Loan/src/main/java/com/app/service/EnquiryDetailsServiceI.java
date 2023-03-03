package com.app.service;

import java.util.List;

import com.app.pojo.EnquiryDetails;

public interface EnquiryDetailsServiceI {

	public EnquiryDetails saveEnquiryDetails(EnquiryDetails enqury);

	public List<EnquiryDetails> getAllEnquiryDetails();

	public EnquiryDetails getSingleEnquiryDetails(int id);

	public void deleteEnquiry(int id);

	public EnquiryDetails editEnquiry(EnquiryDetails enqury);
}
