import React from "react";
import { useState } from "react";

const AccPropertyDetails = (props) => {

    const [accproArr, setaccproArr] = useState({
        accounType:"",accountBalance:"",accountHolderName:"",accountStatus:"",accountNumber:"",
        propertyType:"",propertyArea:"",constructionArea:"",propertyPrice:"",constructionPrice:"",
        propertyDocuments:"",priceProofs:"",areaname:"",cityname:"",district:"",state:"",pincode:"",
        streetName:""});

    const handleChangeAccpro = (e) => {
        setaccproArr({ ...accproArr, [e.target.name]: e.target.value });
    };

    const addAccpro = () => {
        setaccproArr({
            accounType:"",accountBalance:"",accountHolderName:"",accountStatus:"",accountNumber:"",
        propertyType:"",propertyArea:"",constructionArea:"",propertyPrice:"",constructionPrice:"",
        propertyDocuments:"",priceProofs:"",areaname:"",cityname:"",district:"",state:"",pincode:"",
        streetName:""
        })
        props.onAccPropertyDetails(accproArr);
        console.log(accproArr);
    }

    return (
        <div className="container">
            <form>
                <div className="sub4">
                    <div class="row g-3 pt-2">
                        <div class="col">
                            <h5>Account Details</h5>
                        </div>
                    </div>

                    <div formGroupName="accountdetails">
                        <div class="row g-3 pt-2">
                            <div class="col-md-4">
                                <label for="inputaccountNO " class="form-label">Account No :</label>
                                <input type="number" class="form-control" id="inputaccountNO " placeholder="Enter Account NO "
                                    name="accountNumber" value={accproArr.accountNumber} onChange={handleChangeAccpro} />
                            </div>
                            <div class="col-md-4">
                                <label for="inputaccountHolderName" class="form-label">Account Holder Name :</label>
                                <input type="text" class="form-control" id="inputaccountHolderName "
                                    placeholder="Enter Account Holder Name " name="accountHolderName" value={accproArr.accountHolderName} onChange={handleChangeAccpro} />
                            </div>
                            <div class="col-md-4">
                                <label for="inputatype" class="form-label">Account Type :</label>
                                <select id="inputatype" class="form-select" name="accounType" value={accproArr.accounType} onChange={handleChangeAccpro}>
                                    <option selected>Please select</option>
                                    <option>Saving</option>
                                    <option>Salary</option>
                                    <option>Fixed Deposite</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="inputaccountStatus" class="form-label">Account Status :</label>
                                <input type="text" class="form-control" id="inputaccountStatus " placeholder="Enter Account Status"
                                    name="accountStatus" value={accproArr.accountStatus} onChange={handleChangeAccpro} />
                            </div>
                            <div class="col-md-4">
                                <label for="inputaccountStatus" class="form-label">Account Balance :</label>
                                <input type="text" class="form-control" id="inputaccountStatus " placeholder="Enter Account Balance"
                                    name="accountBalance" value={accproArr.houseNumber} onChange={handleChangeAccpro} />
                            </div>
                        </div>
                    </div>


                    <div class="row g-3 pt-2">
                        <div class="col">
                            <h5>Property Details</h5>
                        </div>
                    </div>

                    <div formGroupName="propertyinfo">
                        <div class="row g-3 pt-2">

                            <div class="col-md-4">
                                <label for="inputpropertytype " class="form-label">Property Type :</label>
                                <input type="text" class="form-control" id="inputpropertytype " placeholder="Enter Property Type "
                                    name="propertyType" value={accproArr.propertyType} onChange={handleChangeAccpro} />
                            </div>
                            <div class="col-md-4">
                                <label for="inputpropertyArea" class="form-label">Property Area :</label>
                                <input type="number" class="form-control" id="inputpropertyArea " placeholder="Enter Property Area "
                                    name="propertyArea" value={accproArr.propertyArea} onChange={handleChangeAccpro} />
                            </div>
                            <div class="col-md-4">
                                <label for="inputconstructionArea" class="form-label">Construction Area :</label>
                                <input type="number" class="form-control" id="inputaccountStatus " placeholder="Enter Construction Area"
                                    name="constructionArea" value={accproArr.constructionArea} onChange={handleChangeAccpro} />
                            </div>
                            <div class="col-md-4">
                                <label for="inputpropertyPrice " class="form-label">Property Price :</label>
                                <input type="number" class="form-control" id="inputpropertyPrice " placeholder="Enter Property Price"
                                    name="propertyPrice" value={accproArr.propertyPrice} onChange={handleChangeAccpro} />
                            </div>
                            <div class="col-md-4">
                                <label for="constructionPrice" class="form-label">Construction Price :</label>
                                <input type="number" class="form-control" id="constructionPrice " placeholder="Enter Construction Price"
                                    name="constructionPrice" value={accproArr.constructionPrice} onChange={handleChangeAccpro} />
                            </div>
                        </div>
                        <div class="was-validated">
                            <div class="row g-3 pt-2">
                                <div class="col-md-4">
                                    <label for="inputsalaryslip" class="form-label">Property Documents :</label>
                                    <input type="file" class="form-control" aria-label="file example" required name="propertydocuments" value={accproArr.propertydocuments} onChange={handleChangeAccpro} />
                                    <div class="invalid-feedback">Please Select File</div>
                                </div>

                                <div class="col-md-4">
                                    <label for="inputsalaryslip" class="form-label">Price Proof :</label>
                                    <input type="file" class="form-control" aria-label="file example" required name="priceproof" value={accproArr.priceproof} onChange={handleChangeAccpro} />
                                    <div class="invalid-feedback">Please Select File</div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div formGroupName="propertyinfo">
                        <div formGroupName="propertyAddress">
                            <div class="row g-3">
                                <div class="col-md-4">
                                    <label for="areaname" class="form-label">Area Name :</label>
                                    <input type="text" class="form-control" id="inputareaname" placeholder="Enter Area Name"
                                        name="areaname" value={accproArr.areaname} onChange={handleChangeAccpro} />
                                </div>
                                <div class="col-md-4">
                                    <label for="streetname" class="form-label">Street Name :</label>
                                    <input type="text" class="form-control" id="inputareaname" placeholder="Enter Street Name"
                                        name="streetName" value={accproArr.streetName} onChange={handleChangeAccpro} />
                                </div>

                                <div class="col-md-4">
                                    <div>
                                        <label for="inputcity" class="form-label">City :</label>
                                        <input type="text" class="form-control" id="inputcity" placeholder="Enter Your City" name="city" value={accproArr.city} onChange={handleChangeAccpro} />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div>
                                        <label for="inputdistrict" class="form-label">District :</label>
                                        <input type="text" class="form-control" id="inputdistrict" placeholder="Enter Your District" name="district" value={accproArr.district} onChange={handleChangeAccpro} />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div>
                                        <label for="inputstate" class="form-label">State :</label>
                                    </div>
                                    <div>
                                        <select id="inputstate" class="form-select" name="state" value={accproArr.state} onChange={handleChangeAccpro}>
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
                                        name="pincode" value={accproArr.pincode} onChange={handleChangeAccpro} />
                                </div>

                            </div>
                            <br></br>
                        <div align="center">
                            <button type="button" className="btn btn-info"
                                onClick={addAccpro} >Save</button>&nbsp;&nbsp;
                        </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default AccPropertyDetails;