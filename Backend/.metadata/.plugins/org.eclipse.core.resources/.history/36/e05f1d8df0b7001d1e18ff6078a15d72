package com.app.service;

import org.springframework.web.multipart.MultipartFile;

import com.app.pojo.Customer;
import com.app.pojo.EmailSender;
import com.app.pojo.EnquiryDetails;

public interface EmailSenderServiceI {

	public void emailSend(EmailSender e);

	public EnquiryDetails emailSendwithAttachment(EnquiryDetails e);

	public void sendSanctionLetter(Customer customer, MultipartFile sanctionLetter);

}
