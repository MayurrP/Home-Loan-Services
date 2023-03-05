import React from "react";

const DocUpload = () => {

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
                                    name="loanAmount" />

                            </div>
                            <div class="col-md-4">
                                <label for="inputmPropertyValue" class="form-label">Rate of Intrest :</label>
                                <input type="number" class="form-control" id="inputmPropertyValue" placeholder="Enter Rate of Intrest"
                                    name="rateOfInterest" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputtenure" class="form-label">Tenure :</label>
                                <input type="number" class="form-control" id="inputtenure" placeholder="Enter Tenure (in Months)"
                                    name="tenure" />
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
                                <input type="file" class="form-control" aria-label="file example" required />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="pancard" class="form-label">Pancard :</label>
                                <input type="file" class="form-control" aria-label="file example" required />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="addressproof" class="form-label">Address Proof :</label>
                                <input type="file" class="form-control" aria-label="file example" required />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="itr(IncomeTaxReturn)" class="form-label">IncomeTaxReturn :</label>
                                <input type="file" class="form-control" aria-label="file example" required />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="bankCheque" class="form-label">Bank Cheque :</label>
                                <input type="file" class="form-control" aria-label="file example" required />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="salaryslips" class="form-label">Salary Slips :</label>
                                <input type="file" class="form-control" aria-label="file example" required />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="photo" class="form-label">Photo :</label>
                                <input type="file" class="form-control" aria-label="file example" required />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-4">
                                <label for="signature" class="form-label">Signature :</label>
                                <input type="file" class="form-control" aria-label="file example" required />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>
                            <div class="col-md-2"></div>

                            <div class="col-md-4">
                                <label for="thumb" class="form-label">Thumb Impression :</label>
                                <input type="file" class="form-control" aria-label="file example" required />
                                <div class="invalid-feedback">Please Select File</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row g-3 pt-2">
                    <div class="col-12">
                        <button type="button" class="btn btn-outline-warning">Previous</button>&nbsp;&nbsp;
                        <button type="submit" class="btn btn-outline-primary">Submit</button> &nbsp;&nbsp;
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DocUpload;