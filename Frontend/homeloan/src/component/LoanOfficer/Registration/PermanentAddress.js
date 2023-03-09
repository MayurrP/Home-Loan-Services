import React from "react";
import { useState } from "react";
//import axios from "axios";
const PermanentAddress = (props) => {

    const [permanentArr, setpermanentArr] = useState({
        inputareaname: "", cityname: "", district: "", state: "", pincode: "", houseNumber: "",
        streetName: ""
    });

    const handleChangeAddress = (event) => {
        let { name, value } = event.target;
        setpermanentArr({ ...permanentArr, [name]: value });
    }
    const addAddressData = () => {
        setpermanentArr({
            inputareaname: "", cityname: "", district: "", state: "", pincode: "", houseNumber: "",
            streetName: ""
        })
        props.onPermanentAddress(permanentArr);
       // console.log(permanentArr);
        // axios.post('http://localhost:8080/permanentaddresscontroller/permanentaddress', {
        //     inputareaname:permanentArr.inputareaname, 
        //     cityname:permanentArr.cityname, 
        //     district:permanentArr.district, 
        //     state:permanentArr.state, 
        //     pincode:permanentArr.pincode, 
        //     houseNumber:permanentArr.houseNumber,
        //     streetName:permanentArr.streetName,
        //   }).then(() => {
        //     console.log("success");
        //   });
    }
    return (
        <div className="container">
            <form>
                <div formGroupName="customerAddress">
                    <div className="row g-3 pt-2">
                        <div className="col">
                            <h5>Customer Address</h5>
                        </div>
                    </div>

                    <div formGroupName="permanentAddress">
                        <div className="row g-3 pt-2">
                            <div className="col">
                                <h6>Permanent Address</h6>
                            </div>
                        </div>

                        <div className="row g-3" >
                            <div className="col-md-4">
                                <label for="inputPermanentHouseno" className="form-label">House No :</label>
                                <input type="number" className="form-control" id="inputPermanentHouseno" placeholder="Enter House No" name="houseNumber" value={permanentArr.houseNumber} onChange={handleChangeAddress} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputareaname" className="form-label">Area Name :</label>
                                <input type="text" className="form-control" id="inputareaname" placeholder="Enter Area Name" name="inputareaname" value={permanentArr.inputareaname} onChange={handleChangeAddress} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputpermanentstreetname" className="form-label">Street Name :</label>
                                <input type="text" className="form-control" id="inputpermanentstreetname" placeholder="Enter Street Name" name="streetName" value={permanentArr.streetName} onChange={handleChangeAddress} />
                            </div>
                        </div>

                        <div className="row g-3" >
                            <div className="col-md-4">
                                <div>
                                    <label for="inputpermanentcity" className="form-label">City :</label>
                                    <input type="text" className="form-control" id="inputpermanentcity" placeholder="Enter Your City" name="cityname" value={permanentArr.city} onChange={handleChangeAddress} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <label for="inputpermanentdistrict" className="form-label">District :</label>
                                    <input type="text" className="form-control" id="inputpermanentdistrict" placeholder="Enter Your District" name="district" value={permanentArr.district} onChange={handleChangeAddress} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <label for="inputpermanentstate" className="form-label">State :</label>
                                </div>
                                <div>
                                    <select id="inputpermanentstate" className="form-select" name="state" value={permanentArr.state} onChange={handleChangeAddress}>
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

                        <div className="row g-3" >
                            <div className="col-md-4">
                                <label for="inputpermanentpincode" className="form-label">Pincode :</label>
                                <input type="number" className="form-control" id="inputpermanentpincode" placeholder="Enter Pincode No" name="pincode" value={permanentArr.pincode} onChange={handleChangeAddress} />
                            </div>
                        </div>
                        <br></br>
                        <div>
                            <button type="button" className="btn btn-info"
                                onClick={addAddressData} >Save</button>&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </form>
        </div>
        );
}

export default PermanentAddress;