import React, { useState } from "react";

const AppPersonalDetails = () => {


    return (
        <div className="container">
            <div className="row g-3 pt-2">
                <div className="col">
                    <h5>General Information</h5>
                </div>
            </div>
            <form id="form">
                <div className="sub1">
                    <div className="row g-3 pt-2">
                        <div className="col-md-6" >
                            <label for="name" className="form-label">Name* :</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" 
                            name="customerName"
                            value
                            onChange  />
                            {/* <span className="text-danger">Full Name is Required</span> */}
                        </div>
                        <div className="col-md-2">
                            <label for="age" className="form-label">Age* :</label>
                            <input type="number" className="form-control" placeholder="Enter Your Age" name="customerAge" />
                            {/* <span className="text-danger">Age is Required</span> */}
                        </div>
                        <div className="col-md-2">
                            <label for="dob" className="form-label">DOB* :</label>
                            <input type="date" className="form-control" name="customerDateOfBirth" />
                            {/* <span className="text-danger">DOB is Required</span> */}
                        </div>

                        <div class="col-md-2">
                            <label for="inputGender" class="form-label" >Gender* :</label>
                            <select id="inputGender" class="form-select" name="customerGender">
                                <option>Please select</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                            {/* <span class="text-danger">Please select Gender</span> */}
                        </div>
                    </div>

                    <div class="row g-3 pt-2">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email* :</label>
                            <input type="email" class="form-control" placeholder="Enter Your Email" name="customerEmail" />
                            {/* <span class="text-danger">Please Enter Valid Email Id</span> */}
                        </div>

                        <div class="col-md-3">
                            <label for="inputEmail4" class="form-label">Mobile No* :</label>
                            <input type="number" class="form-control" placeholder="Enter Your Mobile Number" name="customerMobileNumber" />
                            {/* <span class="text-danger">Please Enter Valid Mobile No</span> */}
                        </div>

                        <div class="col-md-3">
                            <label for="inputEmail4" class="form-label">Additional Mobile No* :</label>
                            <input type="number" class="form-control" placeholder="Enter Your Mobile Number" name="customerAdditionalMobileNumber" />
                            {/* <span class="text-danger">Please Enter Valid Mobile No</span> */}
                        </div>
                    </div>

                    <div class="row g-3 pt-2">
                        <div class="col-md-4">
                            <label for="inputEmail4" class="form-label">Amount Paid For Home* :</label>
                            <input type="number" class="form-control" id="inputEmail4" name="customerAmountPaidForHome" />
                            {/* <span class="text-danger">Please Enter Amount Paid For Home</span> */}
                        </div>

                        <div class="col-md-4">
                            <label for="inputEmail4" class="form-label">Total Loan Required* :</label>
                            <input type="number" class="form-control" id="inputEmail4" name="customerTotalLoanRequired" />
                            {/* <span class="text-danger">Please Enter Total Loan Required</span> */}
                        </div>

                        <div class="col-md-4" formGroupName="educationalInfo">
                            <label for="inputEducation" class="form-label">Education* :</label>
                            <select id="inputEducation" class="form-select" name="educationType">
                                <option selected>Please select</option>
                                <option>Post Graduation</option>
                                <option>Graduation</option>
                                <option>Hsc</option>
                                <option>ssc</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="row g-3 pt-2">
                        <div class="col">
                            <h5>Personal Details</h5>
                        </div>
                    </div>

                    <div formGroupName="familydependentInfo">
                        <div class="row g-3 pt-2">
                            <div class="col-md-6">
                                <label for="inputName" class="form-label">Father's Name* :</label>
                                <input type="text" class="form-control" id="inputName" placeholder="Enter Your Father's Name" name="fatherName" required />

                            </div>
                            <div class="col-md-6">
                                <label for="inputmName" class="form-label">Mother's Name* :</label>
                                <input type="text" class="form-control" id="inputmName" placeholder="Enter Your Mother's Name" name="motherName" />
                            </div>
                        </div>


                        <div class="row g-3 pt-2">
                            <div class="col-md-3">
                                <div >
                                    <label for="inputmaritialStatus" class="form-label">Marital Status :</label>
                                </div>
                                <div >
                                    <select id="inputmaritialStatus" class="form-select" name="maritalStatus">
                                        <option selected>Please select</option>
                                        <option>Married</option>
                                        <option>Unmarried</option>
                                        <option>Divorced</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div class="row g-3 pt-2" >
                            <div class="col-md-6" >
                                <label for="inputspouseName" class="form-label"  >Spouse Name* :</label>
                                <input type="text" class="form-control" id="inputCity" name="spouseName" />
                            </div>

                            <div class="col-md-4" >
                                <label for="inputchild" class="form-label">No of Child :</label>
                                <input type="number" class="form-control" id="inputchild" name="noOfChild" />
                            </div>
                        </div>


                        <div class="row g-3 pt-2" >
                            <div class="col-md-3" >
                                <label for="inputfamilyMembers" class="form-label">No Family Members* :</label>
                                <input type="number" class="form-control" id="inputfamilyMembers" name="noOfFamilyMember" />
                            </div>
                            <div class="col-md-3" >
                                <label for="inputdependantMembers" class="form-label">No. Dependant Member* :</label>
                                <input type="number" class="form-control" id="inputdependantMembers" name="dependentMember" />

                            </div>
                            <div class="col-md-3" >
                                <label for="inputfamilyIncome" class="form-label">Total Annual Family Income* :</label>
                                <input type="number" class="form-control" id="inputfamilyIncome" name="familyIncome" />
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
            </form>
        </div>
    );
}

export default AppPersonalDetails;