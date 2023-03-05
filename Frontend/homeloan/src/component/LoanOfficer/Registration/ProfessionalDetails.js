import React from "react";

const ProfessionDetails = () => {

    return (
        <div className="container">
            <form>
                <div className="sub3">
                    <div class="row g-3 pt-2">
                        <div class="col">
                            <h5>Professional Details</h5>
                        </div>
                    </div>

                    <div formGroupName="profession">
                        <div class="row g-3">
                            <div class="col-md-4">
                                <div>
                                    <label for="inputptype" class="form-label">Profession Type :</label>
                                </div>
                                <div>
                                    <select id="inputptype" class="form-select" name="professiontype">
                                        <option selected>Please select</option>
                                        <option>Goverment</option>
                                        <option>Private</option>
                                        <option>Business</option>
                                        <option>Farmer</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="inputdesignation" class="form-label">Designation :</label>
                                <input type="text" class="form-control" id="inputdesignation" placeholder="Enter Your Designation"
                                    name="professionDesignation" />
                            </div>

                            <div class="col-md-4">
                                <div>
                                    <label for="inputsalaryType" class="form-label">Salary Type :</label>
                                </div>
                                <div>
                                    <select id="inputsalaryType" class="form-select" name="professionsalaryType">
                                        <option selected>Please select</option>
                                        <option>Cash</option>
                                        <option>Account</option>
                                        <option>Cheque</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row g-3">
                            <div class="col-md-4">
                                <label for="inputSalary" class="form-label">Annual Salary :</label>
                                <input type="number" class="form-control" id="inputSalary" placeholder="Enter Your Annual Salary"
                                    name="professionsalary" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputworkingperiod" class="form-label">Working Period :</label>
                                <input type="text" class="form-control" id="inputworkingperiod" placeholder="Enter Working Period"
                                    name="professionworkingperiod" />
                            </div>
                        </div>
                        <div class="row g-3">
                            <div class="was-validated">
                                <div class="col-md-10">
                                    <label for="inputsalaryslip" class="form-label">Salary Slip :</label>
                                    <input type="file" class="form-control" aria-label="file example" required />
                                    <div class="invalid-feedback">Please Select File</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-3 pt-2">
                    <div class="col">
                        <h5>Previous Loan Details</h5>
                    </div>
                </div>

                <div formGroupName="previousloan">
                    <div class="row g-3">
                        <div class="col-md-4">
                            <label for="inputploanamount" class="form-label">Previous Loan Amount :</label>
                            <input type="number" class="form-control" id="inputploanamount" placeholder="Enter Previous Loan Amount"
                                name="previousLoanAmount" />

                        </div>
                        <div class="col-md-4">
                            <label for="inputptenure" class="form-label"> Tenure :</label>
                            <input type="number" class="form-control" id="inputptenure" placeholder="Enter Previous Tenure (in Months)"
                                name="previousLoanTenure" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputpaidamount" class="form-label">Paid Amount :</label>
                            <input type="number" class="form-control" id="inputpaidamount" placeholder="Enter Paid Amount"
                                name="previousLoanpaidAmount" />
                        </div>

                        <div class="col-md-4">
                            <label for="inputremainingAmount" class="form-label">Remaining Amount :</label>
                            <input type="number" class="form-control" id="inputremainingAmount" placeholder="Enter Remaining Amount"
                                name="previousLoanremainingAmount" />
                        </div>

                        <div class="col-md-4">
                            <label for="inputdeafulterCount" class="form-label">Deafulter Count :</label>
                            <input type="number" class="form-control" id="inputdeafulterCount" placeholder="Enter Deafulter Count"
                                name="previousLoandeafulterCount" />
                        </div>
                    </div>

                    <div class="row g-3">
                        <div class="row g-3">&nbsp;&nbsp;
                            <div class="col-md-4">
                                <label for="inputremark" class="form-label">Remark :</label>
                                <input type="text" class="form-control" id="inputremark" placeholder="Enter Remark"
                                    name="previousLoanRemark" />
                            </div>&nbsp;
                            <div class="col-md-4">
                                <label for="inputstatus" class="form-label">Status :</label>
                                <input type="text" class="form-control" id="inputstatus" placeholder="Enter Status"
                                    name="previousLoanStatus" />
                            </div>
                        </div>
                    </div>
                </div>


                <div formGroupName="previousloan">
                    <div class="row g-3 pt-2">
                        <div class="col">
                            <h6>Previous Loan Bank Details</h6>
                        </div>
                    </div>

                    <div formGroupName="previousLoanbankDetails">
                        <div class="row g-3">
                            <div class="col-md-4">
                                <label for="inputbranchName" class="form-label">Branch Name :</label>
                                <input type="text" class="form-control" id="inputbranchName" placeholder="Enter Branch Name"
                                    name="branchName" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputbranchCode" class="form-label">Branch Code :</label>
                                <input type="text" class="form-control" id="inputbranchCode" placeholder="Enter Branch Code"
                                    name="branchCode" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputbranchtype" class="form-label">Branch Type :</label>
                                <select id="inputbranchtype" class="form-select" name="branchType">
                                    <option selected>Please select</option>
                                    <option>Main</option>
                                    <option>Sub</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="inputIFSCcode" class="form-label">IFSC code :</label>
                                <input type="text" class="form-control" id="inputIFSCcode" placeholder="Enter IFSC code"
                                    name="ifsccode" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputMICRcode" class="form-label">MICR code :</label>
                                <input type="text" class="form-control" id="inputMICRcode" placeholder="Enter MICR code"
                                    name="micrcode" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputConatctNo" class="form-label">Conatct No :</label>
                                <input type="number" class="form-control" id="inputConatctNo" placeholder="Enter Branch Conatct No"
                                    name="conatctNumber" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputEmail" class="form-label">Email Id :</label>
                                <input type="email" class="form-control" id="inputbranchName" placeholder="Enter Branch Email Id"
                                    name="email" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputstatus" class="form-label">Status :</label>
                                <input type="text" class="form-control" id="inputstatus" placeholder="Enter Status"
                                    name="status" />
                            </div>

                        </div>

                    </div>
                </div>



                <div formGroupName="previousloan">
                    <div formGroupName="previousLoanbankDetails">
                        <div formGroupName="bankAddress">
                            <div class="row g-3 pt-2">
                                <div class="col">
                                    <h5>Bank Address</h5>
                                </div>
                            </div>
                            <div>

                                <div class="row g-3">
                                    <div class="col-md-4">
                                        <label for="areaname" class="form-label">Area Name :</label>
                                        <input type="text" class="form-control" id="inputareaname" placeholder="Enter Area Name"
                                            name="areaname" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="streetname" class="form-label">Street Name :</label>
                                        <input type="text" class="form-control" id="inputareaname" placeholder="Enter Street Name"
                                            name="streetName" />
                                    </div>

                                    <div class="col-md-4">
                                        <div>
                                            <label for="inputcity" class="form-label">City :</label>
                                            <input type="text" class="form-control" id="inputcity" placeholder="Enter Your City" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div>
                                            <label for="inputdistrict" class="form-label">District :</label>
                                            <input type="text" class="form-control" id="inputdistrict" placeholder="Enter Your District" />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="inputstate" class="form-label">State :</label>
                                    </div>
                                    <div>
                                        <select id="inputstate" class="form-select" name="state">
                                            <option selected>Please select</option>
                                            <option value="bihar">Bihar</option>
                                            <option value="jharkhand">Jharkhand</option>
                                            <option value="odisha">Odisha</option>
                                            <option value="west-bengal">West Bengal</option>
                                            <option value="goa">Goa</option>
                                            <option value="gujarat">Gujarat</option>
                                            <option value="maharashtra">Maharashtra</option>
                                            <option value="andhra-pradesh">Andhra Pradesh</option>
                                            <option value="karnataka">Karnataka</option>
                                            <option value="kerala">Kerala</option>
                                            <option value="tamil-nadu">Tamil Nadu</option>
                                            <option value="telangana">Telangana</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="punjab">Punjab</option>
                                            <option value="haryana">Haryana</option>
                                            <option value="rajasthan">Rajasthan</option>
                                            <option value="uttar-pradesh">Uttar Pradesh</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputpincode" class="form-label">Pincode :</label>
                                    <input type="number" class="form-control" id="inputpincode" placeholder="Enter Pincode No"
                                        name="pincode" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
            </form>
        </div>
    )
}

export default ProfessionDetails;