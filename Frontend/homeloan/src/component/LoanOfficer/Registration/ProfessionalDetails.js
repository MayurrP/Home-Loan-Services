import React from "react";
import { useState } from 'react';
//import axios from "axios";

const ProfessionDetails = (props) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const [profArr, setprofArr] = useState({
        professiontype: "", professionsalary: "", professionsalaryType: "", professionworkingperiod: "",
        professionDesignation: ""
    })
    const [professionArr, setprofessionArr] = useState({
        previousLoanAmount: "", previousLoanTenure: "", previousLoanpaidAmount: "",
        previousLoanremainingAmount: "", previousLoandeafulterCount: "", previousLoanStatus: "", previousLoanRemark: "",
        branchName: "", branchCode: "", branchType: "", ifsccode: "", micrcode: "", conatctNumber: "", email: "",
        status: "", areaname: "", cityname: "", district: "", state: "", pincode: "", streetName: ""
    });

    const handleChangeProfessional = (e) => {
        setprofessionArr({ ...professionArr, [e.target.name]: e.target.value });
        setprofArr({ ...profArr, [e.target.name]: e.target.value });
    };

    const addProfession = async () => {
        setprofArr({
            professiontype: "", professionsalary: "", professionsalaryType: "", professionworkingperiod: "",
            professionDesignation: ""
        })
        setprofessionArr({
            previousLoanAmount: "", previousLoanTenure: "", previousLoanpaidAmount: "",
            previousLoanremainingAmount: "", previousLoandeafulterCount: "", previousLoanStatus: "", previousLoanRemark: "",
            branchName: "", branchCode: "", branchType: "", ifsccode: "", micrcode: "", conatctNumber: "", email: "",
            status: "", areaname: "", cityname: "", district: "", state: "", pincode: "", streetName: ""
        })
        props.onProfessionDetailsprofArr(profArr);
        props.onProfessionDetails(professionArr);
        props.onFile1(selectedFile);
        //console.log(profArr);

        

        // axios.post('http://localhost:8080/PreviousLoanController/previousloan', {
        //     branchName: professionArr.branchName,
        // branchCode: professionArr.branchCode,
        // branchType: professionArr.branchType,
        // ifsccode: professionArr.ifsccode,
        // micrcode: professionArr.micrcode,
        // conatctNumber: professionArr.conatctNumber,
        // email: professionArr.email,
        // status: professionArr.status,
        // }).then(() => {
        //     console.log("success");
        // });


        // axios.post('http://localhost:8080/PreviousLoanController/previousloan', {
        //   areaname: professionArr.areaname,
        //   cityname: professionArr.cityname,
        //   district: professionArr.district,
        //   state: professionArr.state,
        //   pincode: professionArr.pincode,
        //   streetName: professionArr.streetName,
        // }).then(() => {
        //     console.log("success");
        // });

        // const formData = new FormData();

        // formData.append('professionsalaryslips', selectedFile);
        // formData.append('cust', JSON.stringify(profArr));

        // //console.log(profArr);
        // console.log(formData);

        // try {
        //     const response = await axios.post('http://localhost:8080/Profession/profession/', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     });
        // console.log(response.data);
        // } catch (error) {
        //     console.log(error);
        // }

        // axios.post('http://localhost:8080/PreviousLoanController/previousloan', {
        //     previousLoanAmount: professionArr.previousLoanAmount,
        //     previousLoanTenure: professionArr.previousLoanTenure,
        //     previousLoanpaidAmount: professionArr.previousLoanpaidAmount,
        //     previousLoanremainingAmount: professionArr.previousLoanremainingAmount,
        //     previousLoandeafulterCount: professionArr.previousLoandeafulterCount,
        //     previousLoanStatus: professionArr.previousLoanStatus,
        //     previousLoanRemark: professionArr.previousLoanRemark,
        // }).then(() => {
        //     console.log("success");
        // });
    }

    return (
        <div className="container">
            <form>
                <div className="sub3">
                    <div className="row g-3 pt-2">
                        <div className="col">
                            <h5>Professional Details</h5>
                        </div>
                    </div>

                    <div formGroupName="profession">
                        <div className="row g-3">
                            <div className="col-md-4">
                                <div>
                                    <label for="inputptype" className="form-label">Profession Type :</label>
                                </div>
                                <div>
                                    <select id="inputptype" className="form-select" name="professiontype" value={profArr.professiontype}
                                        onChange={handleChangeProfessional} >
                                        <option selected>Please select</option>
                                        <option>Goverment</option>
                                        <option>Private</option>
                                        <option>Business</option>
                                        <option>Farmer</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label for="inputdesignation" className="form-label">Designation :</label>
                                <input type="text" className="form-control" id="inputdesignation" placeholder="Enter Your Designation"
                                    name="professionDesignation" value={profArr.professionDesignation}
                                    onChange={handleChangeProfessional} />
                            </div>

                            <div className="col-md-4">
                                <div>
                                    <label for="inputsalaryType" className="form-label">Salary Type :</label>
                                </div>
                                <div>
                                    <select id="inputsalaryType" className="form-select" name="professionsalaryType" value={profArr.professionsalaryType}
                                        onChange={handleChangeProfessional} >
                                        <option selected>Please select</option>
                                        <option>Cash</option>
                                        <option>Account</option>
                                        <option>Cheque</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-md-4">
                                <label for="inputSalary" className="form-label">Annual Salary :</label>
                                <input type="number" className="form-control" id="inputSalary" placeholder="Enter Your Annual Salary"
                                    name="professionsalary" value={profArr.professionsalary}
                                    onChange={handleChangeProfessional} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputworkingperiod" className="form-label">Working Period :</label>
                                <input type="text" className="form-control" id="inputworkingperiod" placeholder="Enter Working Period"
                                    name="professionworkingperiod" value={profArr.professionworkingperiod} onChange={handleChangeProfessional} />
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="was-validated">
                                <div className="col-md-10">
                                    <label for="inputsalaryslip" className="form-label">Salary Slip :</label>
                                    <input type="file" className="form-control" aria-label="file example" required name="salarySlip"
                                        onChange={handleFileInputChange} />
                                    <div className="invalid-feedback">Please Select File</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-3 pt-2">
                    <div className="col">
                        <h5>Previous Loan Details</h5>
                    </div>
                </div>

                <div formGroupName="previousloan">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <label for="inputploanamount" className="form-label">Previous Loan Amount :</label>
                            <input type="number" className="form-control" id="inputploanamount" placeholder="Enter Previous Loan Amount"
                                name="previousLoanAmount" value={professionArr.previousLoanAmount}
                                onChange={handleChangeProfessional} />

                        </div>
                        <div className="col-md-4">
                            <label for="inputptenure" className="form-label"> Tenure :</label>
                            <input type="number" className="form-control" id="inputptenure" placeholder="Enter Previous Tenure (in Months)"
                                name="previousLoanTenure" value={professionArr.previousLoanTenure}
                                onChange={handleChangeProfessional} />
                        </div>
                        <div className="col-md-4">
                            <label for="inputpaidamount" className="form-label">Paid Amount :</label>
                            <input type="number" className="form-control" id="inputpaidamount" placeholder="Enter Paid Amount"
                                name="previousLoanpaidAmount" value={professionArr.previousLoanpaidAmount}
                                onChange={handleChangeProfessional} />
                        </div>

                        <div className="col-md-4">
                            <label for="inputremainingAmount" className="form-label">Remaining Amount :</label>
                            <input type="number" className="form-control" id="inputremainingAmount" placeholder="Enter Remaining Amount"
                                name="previousLoanremainingAmount" value={professionArr.previousLoanremainingAmount}
                                onChange={handleChangeProfessional} />
                        </div>

                        <div className="col-md-4">
                            <label for="inputdeafulterCount" className="form-label">Deafulter Count :</label>
                            <input type="number" className="form-control" id="inputdeafulterCount" placeholder="Enter Deafulter Count"
                                name="previousLoandeafulterCount" value={professionArr.previousLoandeafulterCount}
                                onChange={handleChangeProfessional} />
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="row g-3">&nbsp;&nbsp;
                            <div className="col-md-4">
                                <label for="inputremark" className="form-label">Remark :</label>
                                <input type="text" className="form-control" id="inputremark" placeholder="Enter Remark"
                                    name="previousLoanRemark" value={professionArr.previousLoanRemark}
                                    onChange={handleChangeProfessional} />
                            </div>&nbsp;
                            <div className="col-md-4">
                                <label for="inputstatus" className="form-label">Status :</label>
                                <input type="text" className="form-control" id="inputstatus" placeholder="Enter Status"
                                    name="previousLoanStatus" value={professionArr.previousLoanStatus}
                                    onChange={handleChangeProfessional} />
                            </div>
                        </div>
                    </div>
                </div>


                <div formGroupName="previousloan">
                    <div className="row g-3 pt-2">
                        <div className="col">
                            <h6>Previous Loan Bank Details</h6>
                        </div>
                    </div>

                    <div formGroupName="previousLoanbankDetails">
                        <div className="row g-3">
                            <div className="col-md-4">
                                <label for="inputbranchName" className="form-label">Branch Name :</label>
                                <input type="text" className="form-control" id="inputbranchName" placeholder="Enter Branch Name"
                                    name="branchName" value={professionArr.branchName}
                                    onChange={handleChangeProfessional} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputbranchCode" className="form-label">Branch Code :</label>
                                <input type="text" className="form-control" id="inputbranchCode" placeholder="Enter Branch Code"
                                    name="branchCode" value={professionArr.branchCode}
                                    onChange={handleChangeProfessional} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputbranchtype" className="form-label">Branch Type :</label>
                                <select id="inputbranchtype" className="form-select" name="branchType" value={professionArr.branchType}
                                    onChange={handleChangeProfessional}>
                                    <option selected>Please select</option>
                                    <option>Main</option>
                                    <option>Sub</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label for="inputIFSCcode" className="form-label">IFSC code :</label>
                                <input type="text" className="form-control" id="inputIFSCcode" placeholder="Enter IFSC code"
                                    name="ifsccode" value={professionArr.ifsccode}
                                    onChange={handleChangeProfessional} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputMICRcode" className="form-label">MICR code :</label>
                                <input type="text" className="form-control" id="inputMICRcode" placeholder="Enter MICR code"
                                    name="micrcode" value={professionArr.micrcode}
                                    onChange={handleChangeProfessional} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputConatctNo" className="form-label">Conatct No :</label>
                                <input type="number" className="form-control" id="inputConatctNo" placeholder="Enter Branch Conatct No"
                                    name="conatctNumber" value={professionArr.conatctNumber}
                                    onChange={handleChangeProfessional} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputEmail" className="form-label">Email Id :</label>
                                <input type="email" className="form-control" id="inputbranchName" placeholder="Enter Branch Email Id"
                                    name="email" value={professionArr.email}
                                    onChange={handleChangeProfessional} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputstatus" className="form-label">Status :</label>
                                <input type="text" className="form-control" id="inputstatus" placeholder="Enter Status"
                                    name="status" value={professionArr.status}
                                    onChange={handleChangeProfessional} />
                            </div>

                        </div>

                    </div>
                </div>



                <div formGroupName="previousloan">
                    <div formGroupName="previousLoanbankDetails">
                        <div formGroupName="bankAddress">
                            <div className="row g-3 pt-2">
                                <div className="col">
                                    <h5>Bank Address</h5>
                                </div>
                            </div>
                            <div>

                                <div className="row g-3">
                                    <div className="col-md-4">
                                        <label for="areaname" className="form-label">Area Name :</label>
                                        <input type="text" className="form-control" id="inputareaname" placeholder="Enter Area Name"
                                            name="areaname" value={professionArr.areaname}
                                            onChange={handleChangeProfessional} />
                                    </div>
                                    <div className="col-md-4">
                                        <label for="streetname" className="form-label">Street Name :</label>
                                        <input type="text" className="form-control" id="inputareaname" placeholder="Enter Street Name"
                                            name="streetName" value={professionArr.streetName}
                                            onChange={handleChangeProfessional} />
                                    </div>

                                    <div className="col-md-4">
                                        <div>
                                            <label for="inputcity" className="form-label">City :</label>
                                            <input type="text" className="form-control" id="inputcity" placeholder="Enter Your City" name="city" value={professionArr.city}
                                                onChange={handleChangeProfessional} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <label for="inputdistrict" className="form-label">District :</label>
                                            <input type="text" className="form-control" id="inputdistrict" placeholder="Enter Your District" name="district" value={professionArr.district}
                                                onChange={handleChangeProfessional} />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="inputstate" className="form-label">State :</label>
                                    </div>
                                    <div>
                                        <select id="inputstate" className="form-select" name="state" value={professionArr.state}
                                            onChange={handleChangeProfessional}>
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
                                <div className="col-md-4">
                                    <label for="inputpincode" className="form-label">Pincode :</label>
                                    <input type="number" className="form-control" id="inputpincode" placeholder="Enter Pincode No"
                                        name="pincode" value={professionArr.pincode}
                                        onChange={handleChangeProfessional} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <button type="button" className="btn btn-info"
                            onClick={addProfession} >Save</button>&nbsp;&nbsp;
                    </div>                </div>
            </form>
        </div>
    )
}

export default ProfessionDetails;