import React from "react";

const AddressDetails = () => {

    return (
        <div className="container">
            <form>
                <div formGroupName="customerAddress">

                    <div formGroupName="localAddress">
                        <div class="row g-3 pt-2">
                            <div class="col">
                                <h6>Local Address</h6>
                            </div>
                        </div>

                        <div class="row g-3" >
                            <div class="col-md-4">
                                <label for="inputHouseno" class="form-label">House No :</label>
                                <input type="number" class="form-control" id="inputHouseno" placeholder="Enter House No" name="houseNumber" />
                            </div>
                            <div class="col-md-4">
                                <label for="areaname" class="form-label">Area Name :</label>
                                <input type="text" class="form-control" id="inputareaname" placeholder="Enter Area Name" name="areaname" />
                            </div>
                            <div class="col-md-4">
                                <label for="streetname" class="form-label">Street Name :</label>
                                <input type="text" class="form-control" id="inputareaname" placeholder="Enter Street Name" name="streetName" />
                            </div>
                        </div>

                        <div class="row g-3" >
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
                        </div>

                        <div class="row g-3" >
                            <div class="col-md-4">
                                <label for="inputpincode" class="form-label">Pincode :</label>
                                <input type="number" class="form-control" id="inputpincode" placeholder="Enter Pincode No" name="pincode" />
                            </div>
                        </div>
                    </div>
                    <div formGroupName="permanentAddress">
                        <div class="row g-3 pt-2">
                            <div class="col">
                                <h6>Permanent Address</h6>
                            </div>
                        </div>

                        <div class="row g-3" >
                            <div class="col-md-4">
                                <label for="inputHouseno" class="form-label">House No :</label>
                                <input type="number" class="form-control" id="inputHouseno" placeholder="Enter House No" name="houseNumber" />
                            </div>
                            <div class="col-md-4">
                                <label for="areaname" class="form-label">Area Name :</label>
                                <input type="text" class="form-control" id="inputareaname" placeholder="Enter Area Name" name="areaname" />
                            </div>
                            <div class="col-md-4">
                                <label for="streetname" class="form-label">Street Name :</label>
                                <input type="text" class="form-control" id="inputareaname" placeholder="Enter Street Name" name="streetName" />
                            </div>
                        </div>

                        <div class="row g-3" >
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
                        </div>

                        <div class="row g-3" >
                            <div class="col-md-4">
                                <label for="inputpincode" class="form-label">Pincode :</label>
                                <input type="number" class="form-control" id="inputpincode" placeholder="Enter Pincode No" name="pincode" />
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
            </form>
        </div >

    )
}

export default AddressDetails;