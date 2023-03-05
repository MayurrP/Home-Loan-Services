import React from "react";

const GuarantorDetails = () => {


    return (
        <div className="container">
            <form>
                <div className="sub5">
                    <div class="row g-3 pt-2">
                        <div class="col">
                            <h5>Guarantor Details</h5>
                        </div>
                    </div>

                    <div formGroupName="gurantordetails">
                        <div class="row g-3 pt-2">

                            <div class="col-md-4">
                                <label for="inputgName" class="form-label">Guarantor Name :</label>
                                <input type="text" class="form-control" id="inputgName" placeholder="Enter Name"
                                    name="guarantorName" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputgDateofBirth" class="form-label">Guarantor DOB :</label>
                                <input type="date" class="form-control" id="inputgDateofBirth" name="guarantorDateOfBirth" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputgRelationshipwithCustomer" class="form-label">Relationship with Customer :</label>
                                <input type="text" class="form-control" id="inputgRelationshipwithCustomer"
                                    placeholder="Enter Relationship with Customer" name="guarantorRelationshipwithCustomer" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputgMobNo" class="form-label">Guarantor Mobile No :</label>
                                <input type="number" class="form-control" id="inputgMobNo" placeholder="Enter  Mobile No"
                                    name="guarantorMobileNumber" />
                            </div>
                            <div class="col-md-4">
                                <label for="gAdharCardNo" class="form-label">Guarantor Adhar No :</label>
                                <input type="number" class="form-control" id="gAdharCardNo" placeholder="Enter  Adhar No"
                                    name="guarantorAdharCardNo" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputgJobDetails" class="form-label">Guarantor Job Details :</label>
                                <input type="text" class="form-control" id="inputgJobDetails" placeholder="Enter Job Details"
                                    name="guarantorJobDetails" />
                            </div>
                            <div class="col-md-4">
                                <label for="gMortgageDetails" class="form-label">Guarantor Mortgage Details :</label>
                                <input type="text" class="form-control" id="gMortgageDetails" placeholder="Enter Mortgage Name"
                                    name="guarantorMortgageDetails" />
                            </div>
                            <div class="col-md-12">
                                <label for="glocalAddress" class="form-label">Guarantor local Address :</label>
                                <input type="text" class="form-control" id="glocalAddress" placeholder="Enter local Address"
                                    name="guarantorLoaclAddress" />
                            </div>
                            <div class="col-md-12">
                                <label for="gPermanentAddress" class="form-label">Guarantor Permanent Address :</label>
                                <input type="text" class="form-control" id="gPermanentAddress" placeholder="Enter Permanent Address"
                                    name="guarantorPermanentAddress" />
                            </div>


                        </div>
                    </div>
                    <div class="row g-3 pt-2">
                        <div class="col">
                            <h5>Mortage Details</h5>
                        </div>
                    </div>

                    <div formGroupName="mortgageDetails">
                        <div class="row g-3 pt-2">

                            <div class="col-md-4">
                                <label for="inputmPropertyType" class="form-label">Mortage Property Type :</label>
                                <input type="text" class="form-control" id="inputmPropertyType" placeholder="Enter Property Type"
                                    name="mortgagePropertyType" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputmPropertyValue" class="form-label">Mortage Property Value :</label>
                                <input type="text" class="form-control" id="inputmPropertyValue" placeholder="Enter Property value"
                                    name="mortgagePropertyValue" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputmLoanOnProperty" class="form-label">Loan On Property :</label>
                                <input type="number" class="form-control" id="inputmLoanOnProperty" placeholder="Enter Amount"
                                    name="mortgageLoanOnProperty" />
                            </div>
                        </div>
                        <div class="was-validated">
                            <div class="row g-3 pt-2">
                                <div class="col-md-4">
                                    <label for="mPropertyProof" class="form-label">Property Proof :</label>
                                    <input type="file" class="form-control" aria-label="file example" required />
                                    <div class="invalid-feedback">Please Select File</div>
                                </div>

                                <div class="col-md-4">
                                    <label for="mPropertyInscurance" class="form-label">Property Insurance :</label>
                                    <input type="file" class="form-control" aria-label="file example" required />
                                    <div class="invalid-feedback">Please Select File</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
            </form>
        </div>
    )
}

export default GuarantorDetails;