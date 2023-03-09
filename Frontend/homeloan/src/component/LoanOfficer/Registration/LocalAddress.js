import React from "react";
import { useState } from "react";
//import axios from "axios";
const LocalAddress = (props) => {

    let [localArr, setlocalArr] = useState({
        areaname: "", cityname: "", district: "", state: "", pincode: "", houseNumber: "",
        streetName: ""
    });

    const handleChangeAddress = (event) => {
        let { name, value } = event.target;
        setlocalArr({ ...localArr, [name]: value });
    }
    const addAddressData = () => {
        setlocalArr({
            areaname: "", cityname: "", district: "", state: "", pincode: "", houseNumber: "",
            streetName: ""
        })
        props.onLocalAddress(localArr);
        //console.log(localArr);

        // axios.post('http://localhost:8080/localaddresscontroller/localaddress', {
        //     areaname:localArr.inputareaname, 
        //     cityname:localArr.cityname, 
        //     district:localArr.district, 
        //     state:localArr.state, 
        //     pincode:localArr.pincode, 
        //     houseNumber:localArr.houseNumber,
        //     streetName:localArr.streetName,
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

                    <div formGroupName="localAddress">
                        <div className="row g-3 pt-2">
                            <div className="col">
                                <h6>Local Address</h6>
                            </div>
                        </div>

                        <div className="row g-3" >
                            <div className="col-md-4">
                                <label for="inputLocalHouseno" className="form-label">House No :</label>
                                <input type="number" className="form-control" id="inputLocalHouseno" placeholder="Enter House No" name="houseNumber" value={localArr.houseNumber} onChange={handleChangeAddress} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputareaname" className="form-label">Area Name :</label>
                                <input type="text" className="form-control" id="inputareaname" placeholder="Enter Area Name" name="areaname" value={localArr.areaname} onChange={handleChangeAddress} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputlocalstreetname" className="form-label">Street Name :</label>
                                <input type="text" className="form-control" id="inputlocalstreetname" placeholder="Enter Street Name" name="streetName" value={localArr.streetName} onChange={handleChangeAddress} />
                            </div>
                        </div>

                        <div className="row g-3" >
                            <div className="col-md-4">
                                <div>
                                    <label for="inputlocalcity" className="form-label">City :</label>
                                    <input type="text" className="form-control" id="inputlocalcity" placeholder="Enter Your City" name="cityname" value={localArr.cityname} onChange={handleChangeAddress} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <label for="inputlocaldistrict" className="form-label">District :</label>
                                    <input type="text" className="form-control" id="inputlocaldistrict" placeholder="Enter Your District" name="district" value={localArr.district} onChange={handleChangeAddress} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <label for="inputlocalstate" className="form-label">State :</label>
                                </div>
                                <div>
                                    <select id="inputlocalstate" className="form-select" name="state" value={localArr.state} onChange={handleChangeAddress}>
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
                                <label for="inputlocalpincode" className="form-label">Pincode :</label>
                                <input type="number" className="form-control" id="inputlocalpincode" placeholder="Enter Pincode No" name="pincode" value={localArr.pincode} onChange={handleChangeAddress} />
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

export default LocalAddress;