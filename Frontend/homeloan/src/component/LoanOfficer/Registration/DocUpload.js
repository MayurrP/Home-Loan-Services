import React from "react";
import { useState } from "react";

const DocUpload = (props) => {
    const [docArr, setdocArr] = useState({
        loanAmount: "", rateOfInterest: "", tenure: "", addressProof: "", panCard: "", incomeTax: "",
        addharCard: "", photo: "", signature: "", thumb: "", bankCheque: "", salarySlips: ""
    });

    const handleChangeDoc = (event) => {
        let { name, value } = event.target;
        setdocArr({ ...docArr, [name]: value })
    }
    const addDocs = () => {
        setdocArr({
            loanAmount: "", rateOfInterest: "", tenure: "", addressProof: "", panCard: "", incomeTax: "",
            addharCard: "", photo: "", signature: "", thumb: "", bankCheque: "", salarySlips: ""
        })
        props.onDocUpload(docArr);
        console.log(docArr);
    }
    return (
        <div className="container">
            <form>
                <div className="sub6">
                    <div class="row g-3 pt-2">
                        <div class="col">
                            <h5>Loan Requirements</h5>
                        </div>
                    </div>



                    <div formGroupName="currentloandetails">
                        <div class="row g-3 pt-2">

                            <div class="col-md-4">
                                <label for="inputloanAmount" class="form-label">Loan Amount :</label>
                                <input type="number" class="form-control" id="inputloanAmount" placeholder="Enter Required Loan Amount"
                                    name="loanAmount"
                                    value={docArr.loanAmount}
                                    onChange={handleChangeDoc}
                                />

                            </div>
                            <div class="col-md-4">
                                <label for="inputmPropertyValue" class="form-label">Rate of Intrest :</label>
                                <input type="number" class="form-control" id="inputmPropertyValue" placeholder="Enter Rate of Intrest"
                                    name="rateOfInterest"
                                    value={docArr.rateOfInterest}
                                    onChange={handleChangeDoc} />
                            </div>
                            <div class="col-md-4">
                                <label for="inputtenure" class="form-label">Tenure :</label>
                                <input type="number" class="form-control" id="inputtenure" placeholder="Enter Tenure (in Months)"
                                    name="tenure"
                                    value={docArr.tenure}
                                    onChange={handleChangeDoc} />
                            </div>

                        </div>
                    </div>


                    <div class="row g-3 pt-2">
                        <div class="col">
                            <h5>Personal Documents</h5>
                        </div>
                    </div>

                    <div formGroupName="allpersonalDoc" class="was-validated">
                        <div class="row g-3 pt-2">

                            <div class="col-md-4">
                                <label for="addharCard" class="form-label">Addhar Card :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                    name="addharCard"
                                    value={docArr.addharCard}
                                    onChange={handleChangeDoc}
                                />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="pancard" class="form-label">Pancard :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                name="panCard"
                                value={docArr.panCard}
                                onChange={handleChangeDoc} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="addressproof" class="form-label">Address Proof :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                 name="addressProof"
                                value={docArr.addressProof}
                                onChange={handleChangeDoc} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="itr(IncomeTaxReturn)" class="form-label">IncomeTaxReturn :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                 name="incomeTax"
                                value={docArr.incomeTax}
                                onChange={handleChangeDoc} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="bankCheque" class="form-label">Bank Cheque :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                 name="bankCheque"
                                value={docArr.bankCheque}
                                onChange={handleChangeDoc} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="salaryslips" class="form-label">Salary Slips :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                 name="salaryslips"
                                value={docArr.salaryslips}
                                onChange={handleChangeDoc} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="photo" class="form-label">Photo :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                 name="photo"
                                value={docArr.photo}
                                onChange={handleChangeDoc} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="signature" class="form-label">Signature :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                 name="signature"
                                value={docArr.signature}
                                onChange={handleChangeDoc} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>

                            <div class="col-md-4">
                                <label for="thumb" class="form-label">Thumb Impression :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                 name="thumb"
                                value={docArr.thumb}
                                onChange={handleChangeDoc} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>

                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row g-3 pt-2">
                    <div class="col-12" align="center">
                        <button type="button" class="btn btn-outline-info"
                            onClick={addDocs}>save</button> &nbsp;&nbsp;
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DocUpload;