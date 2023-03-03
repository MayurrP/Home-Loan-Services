package com.app.service;

import java.util.List;

import com.app.pojo.EducationalInformation;

public interface EducationalInformationServiceInterface {

	public EducationalInformation saveEducationalInformation(EducationalInformation education);

	public List<EducationalInformation> getAllEducationalInformation();

	public void deleteEducationalInformation(Integer educationId);

	public EducationalInformation updateEducationalInformation(Integer educationId,EducationalInformation educationalInformation);

	public EducationalInformation getSingleEducationalInformation(Integer educationId);

}
