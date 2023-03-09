import React from "react";
import { useState } from "react";

const DocUpload = (props) => {
    const [docArr, setdocArr] = useState({ loanAmount: "", rateOfInterest: "", tenure: "" });
    const [addressProof, setaddressProof] = useState(null);
    const [panCard, setpanCard] = useState(null);
    const [incomeTax, setincomeTax] = useState(null);
    const [addharCard, setaddharCard] = useState(null);
    const [photo, setphoto] = useState(null);
    const [signature, setsignature] = useState(null);
    const [thumb, setthumb] = useState(null);
    const [bankCheque, setbankCheque] = useState(null);
    const [salarySlips, setsalarySlips] = useState(null);

    const handleChangeaddharCard = (event) => {
        setaddharCard(event.target.files[0])
    }
    const handleChangeDoc = (event) => {
        let { name, value } = event.target;
        setdocArr({ ...docArr, [name]: value })
    }
    const handleChangepanCard = (event) => {
        setpanCard(event.target.files[0])
    }
    
    const handleChangeAddress = (event) => {
        setaddressProof(event.target.files[0])
    }
    
    const handleChangeIncomeTax = (event) => {
        setincomeTax(event.target.files[0])
    }
    const handleChangeBankCheq = (event) => {
        setbankCheque(event.target.files[0])
    }
    
    const handleChangeSalSlip = (event) => {
        setsalarySlips(event.target.files[0])
    }
    const handleChangePhoto = (event) => {
        setphoto(event.target.files[0])
    }
    
    const handleChangeSignature = (event) => {
        setsignature(event.target.files[0])
    }
    
    const handleChangethumb = (event) => {
        setthumb(event.target.files[0])
    }
    const addDocs = () => {
        setdocArr({ loanAmount: "", rateOfInterest: "", tenure: "" })
        props.onDocUpload(docArr);
        props.onFile6(addressProof);
        props.onFile7(panCard);
        props.onFile8(incomeTax);
        props.onFile9(addharCard);
        props.onFile10(photo);
        props.onFile11(signature);
        props.onFile12(thumb);
        props.onFile13(bankCheque);
        props.onFile14(salarySlips);
        //console.log(docArr);
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
                                    onChange={handleChangeaddharCard}
                                />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="pancard" class="form-label">Pancard :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                    name="panCard"
                                    onChange={handleChangepanCard} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="addressproof" class="form-label">Address Proof :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                    name="addressProof"
                                    onChange={handleChangeAddress} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="itr(IncomeTaxReturn)" class="form-label">IncomeTaxReturn :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                    name="incomeTax"
                                    onChange={handleChangeIncomeTax} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="bankCheque" class="form-label">Bank Cheque :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                    name="bankCheque"
                                    onChange={handleChangeBankCheq} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="salaryslips" class="form-label">Salary Slips :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                    name="salaryslips"
                                    onChange={handleChangeSalSlip} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="photo" class="form-label">Photo :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                    name="photo"
                                    onChange={handleChangePhoto} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="signature" class="form-label">Signature :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                    name="signature"
                                    onChange={handleChangeSignature} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>

                            <div class="col-md-4">
                                <label for="thumb" class="form-label">Thumb Impression :</label>
                                <input type="file" class="form-control" aria-label="file example" required
                                    name="thumb"
                                    onChange={handleChangethumb} />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>

                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row g-3 pt-2">
                    <div class="col-12">
                        <button type="button" class="btn btn-outline-info"
                            onClick={addDocs}>save</button> &nbsp;&nbsp;
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DocUpload;