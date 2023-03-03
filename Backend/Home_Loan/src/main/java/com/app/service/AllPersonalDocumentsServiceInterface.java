package com.app.service;

import java.util.List;

import com.app.pojo.AllPersonalDocuments;

public interface AllPersonalDocumentsServiceInterface {



	public AllPersonalDocuments saveAllPersonalDocuments(AllPersonalDocuments documents);

	public List<AllPersonalDocuments> getAllPersonalDocuments();

	public AllPersonalDocuments getSinglePersonalDocuments(Integer documentID);

	public void deleteAllPersonalDocuments(Integer documentID);

	public AllPersonalDocuments updateAllPersonalDocuments(AllPersonalDocuments documents);

	

	 

}
