import React from "react";

const AccPropertyDetails = () => {

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
                                    name="accountNumber" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputaccountHolderName" class="form-label">Account Holder Name :</label>
                                <input type="text" class="form-control" id="inputaccountHolderName "
                                    placeholder="Enter Account Holder Name " name="accountHolderName" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputatype" class="form-label">Account Type :</label>
                                <select id="inputatype" class="form-select" name="accounType">
                                    <option selected>Please select</option>
                                    <option>Saving</option>
                                    <option>Salary</option>
                                    <option>Fixed Deposite</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="inputaccountStatus" class="form-label">Account Status :</label>
                                <input type="text" class="form-control" id="inputaccountStatus " placeholder="Enter Account Status"
                                    name="accountStatus" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputaccountStatus" class="form-label">Account Balance :</label>
                                <input type="text" class="form-control" id="inputaccountStatus " placeholder="Enter Account Balance"
                                    name="accountBalance" />
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
                                    name="propertyType" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputpropertyArea" class="form-label">Property Area :</label>
                                <input type="number" class="form-control" id="inputpropertyArea " placeholder="Enter Property Area "
                                    name="propertyArea" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputconstructionArea" class="form-label">Construction Area :</label>
                                <input type="number" class="form-control" id="inputaccountStatus " placeholder="Enter Construction Area"
                                    name="constructionArea" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputpropertyPrice " class="form-label">Property Price :</label>
                                <input type="number" class="form-control" id="inputpropertyPrice " placeholder="Enter Property Price"
                                    name="propertyPrice" />
                            </div>
                            <div class="col-md-4">
                                <label for="constructionPrice" class="form-label">Construction Price :</label>
                                <input type="number" class="form-control" id="constructionPrice " placeholder="Enter Construction Price"
                                    name="constructionPrice" />
                            </div>
                        </div>
                        <div class="was-validated">
                            <div class="row g-3 pt-2">
                                <div class="col-md-4">
                                    <label for="inputsalaryslip" class="form-label">Property Documents :</label>
                                    <input type="file" class="form-control" aria-label="file example" required />
                                    <div class="invalid-feedback">Please Select File</div>
                                </div>

                                <div class="col-md-4">
                                    <label for="inputsalaryslip" class="form-label">Price Proof :</label>
                                    <input type="file" class="form-control" aria-label="file example" required />
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
                                <div class="col-md-4">
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
                </div>

            </form>
        </div>
    )
}

export default AccPropertyDetails;