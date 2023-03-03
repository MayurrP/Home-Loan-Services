package com.app.service;

import com.app.pojo.EMIDetails;

public interface EMIDetailsServiceI {

	public EMIDetails saveEMIDetails(EMIDetails ed);

	public Iterable<EMIDetails> getAllEMIDetails();

	public EMIDetails updateEMIDetails(Integer emiID, EMIDetails ed);

	public EMIDetails getSingleEMIDetails(Integer emiID);

	public void deleteEMIDetails(Integer emiID);

}
