import React from "react";
import { useState } from 'react';
import axios, { Axios } from "axios";

const AppPersonalDetails = (props) => {

    let [appPersonalArr, setappPersonalArr] = useState({
        customerName: "", customerDateOfBirth: "",
        customerAge: "", customerGender: "", customerEmail: "", customerMobileNumber: "",
        customerAdditionalMobileNumber: "", customerAmountPaidForHome: "", customerTotalLoanRequired: "",
        fatherName: "", motherName: "", noOfFamilyMember: "",
        noOfChild: "", maritalStatus: "", dependentMember: "", familyIncome: "", spouseName: ""
    });

    const handleChangeAppPersonal = (event) => {
        let { name, value } = event.target;
        setappPersonalArr({ ...appPersonalArr, [name]: value })
    }

    const addAppPersonalData = () => {
       
        setappPersonalArr({
            customerName: "", customerDateOfBirth: "",
            customerAge: "", customerGender: "", customerEmail: "", customerMobileNumber: "",
            customerAdditionalMobileNumber: "", customerAmountPaidForHome: "", customerTotalLoanRequired: "",
            fatherName: "", motherName: "", noOfFamilyMember: "",
            noOfChild: "", maritalStatus: "", dependentMember: "", familyIncome: "", spouseName: ""
        })
        props.onAppPersonalDetails(appPersonalArr);
        console.log(appPersonalArr);

        axios.post('http://localhost:8080/dependentinfocontroller/dependentInfoData',{
            fatherName:appPersonalArr.fatherName,
            motherName:appPersonalArr.motherName,
            noOfFamilyMember:appPersonalArr.noOfFamilyMember,
            noOfChild:appPersonalArr.noOfChild, 
            maritalStatus:appPersonalArr.maritalStatus, 
            dependentMember:appPersonalArr.dependentMember, 
            familyIncome:appPersonalArr.familyIncome, 
            spouseName:appPersonalArr.spouseName
        }).then(() => {
            console.log("success");
        })
    }

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
                            <label htmlFor="name" className="form-label">Name* :</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name"
                                name="customerName"
                                value={appPersonalArr.customerName}
                                onChange={handleChangeAppPersonal} />
                            {/* <span className="text-danger">Full Name is Required</span> */}
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="age" className="form-label">Age* :</label>
                            <input type="number" className="form-control" placeholder="Enter Your Age" name="customerAge"
                                value={appPersonalArr.customerAge}
                                onChange={handleChangeAppPersonal} />
                            {/* <span className="text-danger">Age is Required</span> */}
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="dob" className="form-label">DOB* :</label>
                            <input type="date" className="form-control" name="customerDateOfBirth"
                                value={appPersonalArr.customerDateOfBirth}
                                onChange={handleChangeAppPersonal} />
                            {/* <span className="text-danger">DOB is Required</span> */}
                        </div>

                        <div className="col-md-2">
                            <label htmlFor="inputGender" className="form-label" >Gender* :</label>
                            <select id="inputGender" className="form-select" name="customerGender"
                                value={appPersonalArr.customerGender}
                                onChange={handleChangeAppPersonal}>
                                <option>Please select</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                            {/* <span className="text-danger">Please select Gender</span> */}
                        </div>
                    </div>

                    <div className="row g-3 pt-2">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email* :</label>
                            <input type="email" className="form-control" placeholder="Enter Your Email" name="customerEmail"
                                value={appPersonalArr.customerEmail}
                                onChange={handleChangeAppPersonal} />
                            {/* <span className="text-danger">Please Enter Valid Email Id</span> */}
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputMobile" className="form-label">Mobile No* :</label>
                            <input type="number" className="form-control" placeholder="Enter Your Mobile Number" name="customerMobileNumber"
                                value={appPersonalArr.customerMobileNumber}
                                onChange={handleChangeAppPersonal} />
                            {/* <span className="text-danger">Please Enter Valid Mobile No</span> */}
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputEmail4" className="form-label">Additional Mobile No* :</label>
                            <input type="number" className="form-control" placeholder="Enter Your Mobile Number" name="customerAdditionalMobileNumber"
                                value={appPersonalArr.customerAdditionalMobileNumber}
                                onChange={handleChangeAppPersonal} />
                            {/* <span className="text-danger">Please Enter Valid Mobile No</span> */}
                        </div>
                    </div>

                    <div className="row g-3 pt-2">
                        <div className="col-md-4">
                            <label htmlFor="inputEmail4" className="form-label">Amount Paid For Home* :</label>
                            <input type="number" className="form-control" id="inputEmail4" name="customerAmountPaidForHome"
                                value={appPersonalArr.customerAmountPaidForHome} onChange={handleChangeAppPersonal} />
                            {/* <span className="text-danger">Please Enter Amount Paid For Home</span> */}
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="inputEmail4" className="form-label">Total Loan Required* :</label>
                            <input type="number" className="form-control" id="inputEmail4" name="customerTotalLoanRequired"
                                value={appPersonalArr.customerTotalLoanRequired} onChange={handleChangeAppPersonal} />
                            {/* <span className="text-danger">Please Enter Total Loan Required</span> */}
                        </div>

                        <div className="col-md-4" formgroupname="educationalInfo">
                            <label htmlFor="inputEducation" className="form-label">Education* :</label>
                            <select id="inputEducation" className="form-select" name="educationType"
                                value={appPersonalArr.educationType} onChange={handleChangeAppPersonal}>
                                <option selected>Please select</option>
                                <option>Post Graduation</option>
                                <option>Graduation</option>
                                <option>Hsc</option>
                                <option>ssc</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-3 pt-2">
                        <div className="col">
                            <h5>Personal Details</h5>
                        </div>
                    </div>

                    <div formgroupname="appPersonalArr">
                        <div className="row g-3 pt-2">
                            <div className="col-md-6">
                                <label htmlFor="inputName" className="form-label">Father's Name* :</label>
                                <input type="text" className="form-control" id="inputName" placeholder="Enter Your Father's Name" name="fatherName"
                                    required value={appPersonalArr.fatherName} onChange={handleChangeAppPersonal} />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputmName" className="form-label">Mother's Name* :</label>
                                <input type="text" className="form-control" id="inputmName" placeholder="Enter Your Mother's Name" name="motherName"
                                    value={appPersonalArr.motherName} onChange={handleChangeAppPersonal} />
                            </div>
                        </div>


                        <div className="row g-3 pt-2">
                            <div className="col-md-3">
                                <div >
                                    <label htmlFor="inputmaritialStatus" className="form-label">Marital Status :</label>
                                </div>
                                <div >
                                    <select id="inputmaritialStatus" className="form-select" name="maritalStatus"
                                        value={appPersonalArr.maritalStatus} onChange={handleChangeAppPersonal}>
                                        <option selected>Please select</option>
                                        <option>Married</option>
                                        <option>Unmarried</option>
                                        <option>Divorced</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className="row g-3 pt-2" >
                            <div className="col-md-6" >
                                <label htmlFor="inputspouseName" className="form-label"  >Spouse Name* :</label>
                                <input type="text" className="form-control" id="inputCity" name="spouseName"
                                    value={appPersonalArr.spouseName} onChange={handleChangeAppPersonal} />
                            </div>

                            <div className="col-md-4" >
                                <label htmlFor="inputchild" className="form-label">No of Child :</label>
                                <input type="number" className="form-control" id="inputchild" name="noOfChild"
                                    value={appPersonalArr.noOfChild} onChange={handleChangeAppPersonal} />
                            </div>
                        </div>


                        <div className="row g-3 pt-2" >
                            <div className="col-md-3" >
                                <label htmlFor="inputfamilyMembers" className="form-label">No Family Members* :</label>
                                <input type="number" className="form-control" id="inputfamilyMembers" name="noOfFamilyMember"
                                    value={appPersonalArr.noOfFamilyMember} onChange={handleChangeAppPersonal} />
                            </div>
                            <div className="col-md-3" >
                                <label htmlFor="inputdependantMembers" className="form-label">No. Dependant Member* :</label>
                                <input type="number" className="form-control" id="inputdependantMembers" name="dependentMember"
                                    value={appPersonalArr.dependentMember} onChange={handleChangeAppPersonal} />

                            </div>
                            <div className="col-md-3" >
                                <label htmlFor="inputfamilyIncome" className="form-label">Total Annual Family Income* :</label>
                                <input type="number" className="form-control" id="inputfamilyIncome" name="familyIncome"
                                    value={appPersonalArr.familyIncome} onChange={handleChangeAppPersonal} />
                            </div>
                        </div>
                        <br></br>
                        <div align="center">
                            <button type="button" className="btn btn-info"
                                onClick={addAppPersonalData} >Save</button>&nbsp;&nbsp;
                        </div>
                    </div>
                    <br></br>
                </div>
            </form>
        </div>
    );
}

export default AppPersonalDetails;