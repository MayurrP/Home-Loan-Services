package com.app.service;

import com.app.pojo.BranchAddress;

public interface BranchAddressServiceI {

	public BranchAddress saveBranchAddress(BranchAddress ba);

	public Iterable<BranchAddress> getAllBranchAddress();

	public BranchAddress updateBranchAddress(Integer branchAddressId, BranchAddress ba);

	public BranchAddress getSingleBranchAddress(Integer branchAddressId);

	public void deleteBranchAddress(Integer branchAddressId);

}
