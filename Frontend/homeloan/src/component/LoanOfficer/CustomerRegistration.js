import React, { useState } from 'react';
import AppPersonalDetails from "./Registration/AppPersonalDetails";
import AddressDetails from "./Registration/AddressDetails";
import AccPropertyDetails from "./Registration/AccPropertyDetails";
import DocUpload from "./Registration/DocUpload";
import GuarantorDetails from "./Registration/GuarantorDetails";
import ProfessionDetails from "./Registration/ProfessionalDetails";
import "./CustomerRegistration.css";
import axios from 'axios';

const CustomerRegistration = () => {
    const [step, setStep] = useState(1);
    const [obj1, setObj1] = useState('');
    const [obj2permanent, setObj2permanent] = useState('');
    const [obj2local, setObj2local] = useState('');
    const [obj3, setObj3] = useState('');
    const [obj3prof, setObj3prof] = useState('');
    const [obj4, setObj4] = useState('');
    const [obj4property, setObj4property] = useState('');
    const [obj5, setObj5] = useState('');
    const [obj5mortgageArr, setObj5mortgageArr] = useState('');
    const [obj6, setObj6] = useState('');
    const [salfile, setSalfile] = useState([]);
    const [priceproof, setPriceProof] = useState([]);
    const [propertydoc, setPropertyDoc] = useState([]);
    const [mortgagePropertyInsurance, setmortgagePropertyInsurance] = useState([]);
    const [mortgagePropertyProof, setmortgagePropertyProof] = useState([]);
    const [addressProof, setaddressProof] = useState([]);
    const [panCard, setpanCard] = useState([]);
    const [incomeTax, setincomeTax] = useState([]);
    const [addharCard, setaddharCard] = useState([]);
    const [photo, setphoto] = useState([]);
    const [signature, setsignature] = useState([]);
    const [thumb, setthumb] = useState([]);
    const [bankCheque, setbankCheque] = useState([]);
    const [salarySlips, setsalarySlips] = useState([]);
    const [custArr, setcustArr] = useState({
        customerName: "",
        customerDateOfBirth: "",
        customerAge: "",
        customerGender: "",
        customerEmail: "",
        customerMobileNumber: "",
        customerAdditionalMobileNumber: "",
        customerAmountPaidForHome: "",
        customerTotalLoanRequired: "",
        enquiryDetails: {
            id: 2,
            firstName: "",
            lastName: "",
            age: "",
            email: "",
            mobileNo: 0,
            pancardNo: "",
            mailSent: "",
            cibil: {
                cibilId: 0,
                cibilScore: 0,
                cibilScoreDateTime: "",
                status: "",
                remark: ""
            }
        },
        educationalInfo: {
            educationId: 0,
            educationType: ""
        },
        familydependentInfo: {
            fatherName: "",
            motherName: "",
            noOfFamilyMember: "",
            noOfChild: "",
            maritalStatus: "",
            dependentMember: "",
            familyIncome: "",
            spouseName: ""
        },
        customerAddress: {
            customerAddressId: 0,
            permanentAddress: {
                permanentAddressId: 0,
                areaname: "",
                cityname: "",
                district: "",
                state: "",
                pincode: "",
                houseNumber: "",
                streetName: ""
            },
            localAddress: {
                localAddressId: 0,
                areaname: "",
                cityname: "",
                district: "",
                state: "",
                pincode: "",
                houseNumber: "",
                streetName: ""
            }
        },
        profession: {
            professionid: 0,
            professiontype: "",
            professionsalary: "",
            professionsalaryType: "",
            professionworkingperiod: "",
            professionDesignation: "",
        },
        previousloan: {
            previousLoanId: 0,
            previousLoanAmount: "",
            previousLoanTenure: "",
            previousLoanpaidAmount: "",
            previousLoanremainingAmount: "",
            previousLoandeafulterCount: "",
            previousLoanRemark: "",
            previousLoanStatus: "",
            previousLoanbankDetails: {
                branchId: 0,
                branchName: "",
                branchCode: "",
                branchType: "",
                ifsccode: "",
                micrcode: "",
                conatctNumber: "",
                email: "",
                status: "",
                bankAddress: {
                    branchAddressId: 0,
                    areaname: "",
                    cityname: "",
                    district: "",
                    state: "",
                    pincode: "",
                    streetName: ""
                }
            }
        },
        accountdetails: {
            accounType: "",
            accountBalance: "",
            accountHolderName: "",
            accountStatus: "",
            accountNumber: ""
        },
        propertyinfo: {
            propertyType: "",
            propertyArea: "",
            constructionArea: "",
            propertyPrice: "",
            constructionPrice: "",
            propertyAddress: {
                areaname: "",
                cityname: "",
                district: "",
                state: "",
                pincode: "",
                streetName: ""
            }
        },
        gurantordetails: {
            guarantorId: 0,
            guarantorName: "",
            guarantorMobileNumber: "",
            guarantorDateOfBirth: "",
            guarantorRelationshipwithCustomer: "",
            guarantorAdharCardNo: "",
            guarantorMortgageDetails: "",
            guarantorJobDetails: "",
            guarantorLoaclAddress: "",
            guarantorPermanentAddress: ""
        },
        mortgageDetails: {
            mortgageId: 0,
            mortgagePropertyValue: "",
            mortgagePropertyType: "",
            mortgageLoanOnProperty: ""
        },
        currentloandetails: {
            currentloanId: 0,
            currentloanNo: 0,
            loanAmount: "",
            rateOfInterest: "",
            tenure: "",
            totalAmounttobepaidDouble: 0,
            processingFees: 0,
            totalInterest: 0,
            sanctionDate: "",
            remark: "",
            status: "",
            emidetails: {
                emiID: 0,
                emiAmountMonthly: 0,
                nextEmiDueDate: "",
                previousEmiStatus: ""
            }
        },
        customerverification: {
            verificationID: 0,
            verificationDate: "",
            status: "",
            remarks: ""
        },
        sanctionletter: {
            sanctionId: 0,
            sanctionDate: "",
            applicantName: "",
            contactDetails: 0,
            producthomeEquity: "",
            loanAmtSanctioned: 0,
            interestType: "",
            rateOfInterest: 0,
            loanTenure: 0,
            monthlyEmiAmount: 0,
            modeOfPayment: "",
            remarks: "",
            termsCondition: "",
            status: ""
        },
        loandisbursement: {
            agreementId: 0,
            loanNo: 0,
            agreementDate: "",
            amountPayType: "",
            totalAmount: 0,
            bankName: "",
            accountNumber: 0,
            ifsccode: "",
            accountType: "",
            transferAmount: 0,
            paymentStatus: "",
            amountPaidDate: ""
        },
        ledger: {
            ledgerId: 0,
            ledgerCreatedDate: "",
            totalLoanAmount: 0,
            payableAmountwithInterest: 0,
            tenure: 0,
            monthlyEMI: 0,
            amountPaidtillDate: 0,
            remainingAmount: 0,
            nextEmiDatestart: "",
            nextEmiDateEnd: "",
            defaulterCount: "",
            previousEmitStatus: "",
            currentMonthEmiStatus: "",
            loanEndDate: "",
            loanStatus: ""
}});


    const handleBack = () => {
        setStep(step - 1);
    };

    const handleNext = () => {
        setStep(step + 1);
    };


    const submitRegistrationForm = async () => {
        setcustArr(
            {
                customerId: 0,
                customerName: obj1.customerName,
                customerDateOfBirth: obj1.customerDateOfBirth,
                customerAge: obj1.customerAge,
                customerGender: obj1.customerGender,
                customerEmail: obj1.customerEmail,
                customerMobileNumber: obj1.customerMobileNumber,
                customerAdditionalMobileNumber: obj1.customerAdditionalMobileNumber,
                customerAmountPaidForHome: obj1.customerAmountPaidForHome,
                customerTotalLoanRequired: obj1.customerTotalLoanRequired,
                enquiryDetails: {
                    id: 2,
                    firstName: "demo",
                    lastName: "demo",
                    age: 0,
                    email: "demo",
                    mobileNo: 0,
                    pancardNo: "demo",
                    mailSent: "demo",
                    cibil: {
                        cibilId: 0,
                        cibilScore: 0,
                        cibilScoreDateTime: "demo",
                        status: "demo",
                        remark: "demo"
                    }
                },
                educationalInfo: {
                    educationId: 0,
                    educationType: obj1.educationType
                },
                familydependentInfo: {
                    fatherName: obj1.fatherName,
                    motherName: obj1.motherName,
                    noOfFamilyMember: obj1.noOfFamilyMember,
                    noOfChild: obj1.noOfChild,
                    maritalStatus: obj1.maritalStatus,
                    dependentMember: obj1.dependentMember,
                    familyIncome: obj1.familyIncome,
                    spouseName: obj1.spouseName
                },
                customerAddress: {
                    customerAddressId: 0,
                    permanentAddress: {
                        permanentAddressId: 0,
                        areaname: obj2permanent.areaname,
                        cityname: obj2permanent.cityname,
                        district: obj2permanent.district,
                        state: obj2permanent.state,
                        pincode: obj2permanent.pincode,
                        houseNumber: obj2permanent.houseNumber,
                        streetName: obj2permanent.streetName
                    },
                    localAddress: {
                        localAddressId: 0,
                        areaname: obj2local.areaname,
                        cityname: obj2local.cityname,
                        district: obj2local.district,
                        state: obj2local.state,
                        pincode: obj2local.pincode,
                        houseNumber: obj2local.houseNumber,
                        streetName: obj2local.streetName
                    }
                },
                profession: {
                    professionid: 0,
                    professiontype: obj3prof.professiontype,
                    professionsalary: obj3prof.professionsalary,
                    professionsalaryType: obj3prof.professionsalaryType,
                    professionworkingperiod: obj3prof.professionworkingperiod,
                    professionDesignation: obj3prof.professionDesignation,
                },
                previousloan: {
                    previousLoanId: 0,
                    previousLoanAmount: obj3.previousLoanAmount,
                    previousLoanTenure: obj3.previousLoanTenure,
                    previousLoanpaidAmount: obj3.previousLoanpaidAmount,
                    previousLoanremainingAmount: obj3.previousLoanremainingAmount,
                    previousLoandeafulterCount: obj3.previousLoandeafulterCount,
                    previousLoanRemark: obj3.previousLoanRemark,
                    previousLoanStatus: obj3.previousLoanStatus,
                    previousLoanbankDetails: {
                        branchId: 0,
                        branchName: obj3.branchName,
                        branchCode: obj3.branchCode,
                        branchType: obj3.branchType,
                        ifsccode: obj3.ifsccode,
                        micrcode: obj3.micrcode,
                        conatctNumber: obj3.conatctNumber,
                        email: obj3.email,
                        status: obj3.status,
                        bankAddress: {
                            branchAddressId: 0,
                            areaname: obj3.areaname,
                            cityname: obj3.cityname,
                            district: obj3.district,
                            state: obj3.state,
                            pincode: obj3.pincode,
                            streetName: obj3.streetName
                        }
                    }
                },
                accountdetails: {
                    accounType: obj4.accounType,
                    accountBalance: obj4.accountBalance,
                    accountHolderName: obj4.accountHolderName,
                    accountStatus: obj4.accountStatus,
                    accountNumber: obj4.accountNumber
                },
                propertyinfo: {
                    propertyType: obj4property.propertyType,
                    propertyArea: obj4property.propertyArea,
                    constructionArea: obj4property.constructionArea,
                    propertyPrice: obj4property.propertyPrice,
                    constructionPrice: obj4property.constructionPrice,
                    propertyAddress: {
                        areaname: obj4.areaname,
                        cityname: obj4.cityname,
                        district: obj4.district,
                        state: obj4.state,
                        pincode: obj4.pincode,
                        streetName: obj4.streetName
                    }
                },
                gurantordetails: {
                    guarantorId: 0,
                    guarantorName: obj5.guarantorName,
                    guarantorMobileNumber: obj5.guarantorMobileNumber,
                    guarantorDateOfBirth: obj5.guarantorDateOfBirth,
                    guarantorRelationshipwithCustomer: obj5.guarantorRelationshipwithCustomer,
                    guarantorAdharCardNo: obj5.guarantorAdharCardNo,
                    guarantorMortgageDetails: obj5.guarantorMortgageDetails,
                    guarantorJobDetails: obj5.guarantorJobDetails,
                    guarantorLoaclAddress: obj5.guarantorLoaclAddress,
                    guarantorPermanentAddress: obj5.guarantorPermanentAddress
                },
                mortgageDetails: {
                    mortgageId: 0,
                    mortgagePropertyValue: obj5mortgageArr.mortgagePropertyValue,
                    mortgagePropertyType: obj5mortgageArr.mortgagePropertyType,
                    mortgageLoanOnProperty: obj5mortgageArr.mortgageLoanOnProperty
                },
                currentloandetails: {
                    currentloanId: 0,
                    currentloanNo: 0,
                    loanAmount: obj6.loanAmount,
                    rateOfInterest: obj6.rateOfInterest,
                    tenure: obj6.tenure,
                    totalAmounttobepaidDouble: 0,
                    processingFees: 0,
                    totalInterest: 0,
                    sanctionDate: "demo",
                    remark: "demo",
                    status: "demo",
                    emidetails: {
                        emiID: 0,
                        emiAmountMonthly: 0,
                        nextEmiDueDate: "demo",
                        previousEmiStatus: "demo"
                    }
                },
                customerverification: {
                    verificationID: 0,
                    verificationDate: "demo",
                    status: "demo",
                    remarks: "demo"
                },
                sanctionletter: {
                    sanctionId: 0,
                    sanctionDate: "demo",
                    applicantName: "demo",
                    contactDetails: 0,
                    producthomeEquity: "demo",
                    loanAmtSanctioned: 0,
                    interestType: "demo",
                    rateOfInterest: 0,
                    loanTenure: 0,
                    monthlyEmiAmount: 0,
                    modeOfPayment: "demo",
                    remarks: "demo",
                    termsCondition: "demo",
                    status: "demo"
                },
                loandisbursement: {
                    agreementId: 0,
                    loanNo: 0,
                    agreementDate: "demo",
                    amountPayType: "demo",
                    totalAmount: 0,
                    bankName: "demo",
                    accountNumber: 0,
                    ifsccode: "demo",
                    accountType: "demo",
                    transferAmount: 0,
                    paymentStatus: "demo",
                    amountPaidDate: "demo"
                },
                ledger: {
                    ledgerId: 0,
                    ledgerCreatedDate: "demo",
                    totalLoanAmount: 0,
                    payableAmountwithInterest: 0,
                    tenure: 0,
                    monthlyEMI: 0,
                    amountPaidtillDate: 0,
                    remainingAmount: 0,
                    nextEmiDatestart: "demo",
                    nextEmiDateEnd: "demo",
                    defaulterCount: 0,
                    previousEmitStatus: "demo",
                    currentMonthEmiStatus: "demo",
                    loanEndDate: "demo",
                    loanStatus: "demo"
                }
            });
        console.log(custArr);
        const formData = new FormData();

        formData.append('addressProof', addressProof);
        formData.append('panCard', panCard);
        formData.append('incomeTax', incomeTax);
        formData.append('addharCard', addharCard);
        formData.append('photo', photo);
        formData.append('signature', signature);
        formData.append('thumb', thumb);
        formData.append('bankCheque', bankCheque);
        formData.append('salarySlips', salarySlips);
        formData.append('mortgagePropertyProof', mortgagePropertyProof);
        formData.append('mortgagePropertyInsurance', mortgagePropertyInsurance);
        formData.append('professionsalaryslips', salfile);
        formData.append('propertyDocuments', propertydoc);
        formData.append('priceProofs', priceproof);
        formData.append('cust', JSON.stringify(custArr));

        console.log(custArr);
        console.log(formData);

        try {
            const response = await axios.post('http://localhost:8080/CustomerController/customer/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

    }
    // console.log(obj1);
    // console.log(obj2permanent);
    // console.log(obj2local)
    // console.log(salfile);
    // console.log(obj3);
    // console.log(obj3prof);
    // console.log(obj4);
    // console.log(obj4property);
    // console.log(priceproof);
    // console.log(propertydoc);
    // console.log(mortgagePropertyInsurance);
    // console.log(mortgagePropertyProof);
    // console.log(obj5);
    // console.log(obj6);
    // console.log(addharCard);
    // console.log(addressProof);
    // console.log(panCard);
    // console.log(incomeTax);
    // console.log(photo);
    // console.log(signature);
    // console.log(thumb);
    // console.log(bankCheque);
    // console.log(salarySlips);




    return (
        <div>
            <div className='stepcss1'>
                {step === 1 && <AppPersonalDetails onAppPersonalDetails={setObj1} />}
            </div>
            <div className='stepcss2'>
                {step === 2 && <AddressDetails onpermanentAddressDetails={setObj2permanent} onlocalAddressDetails={setObj2local} />}
            </div>
            <div className='stepcss3'>
                {step === 3 && <ProfessionDetails onProfessionDetails={setObj3} onProfessionDetailsprofArr={setObj3prof} onFile1={setSalfile} />}
            </div>
            <div className='stepcss4'>
                {step === 4 && <AccPropertyDetails onAccPropertyDetails={setObj4}
                    onAccPropertyDetailsArr={setObj4property} onFile2={setPriceProof} onFile3={setPropertyDoc} />}
            </div>
            <div className='stepcss2'>
                {step === 5 && <GuarantorDetails onGuarantorDetails={setObj5} onGuarantorMortage={setObj5mortgageArr}
                    onFile4={setmortgagePropertyProof} onFile5={setmortgagePropertyInsurance} />}
            </div>
            <div className='stepcss2'>
                {step === 6 && <DocUpload onDocUpload={setObj6}
                    onFile6={setaddressProof}
                    onFile7={setpanCard}
                    onFile8={setincomeTax}
                    onFile9={setaddharCard}
                    onFile10={setphoto}
                    onFile11={setsignature}
                    onFile12={setthumb}
                    onFile13={setbankCheque}
                    onFile14={setsalarySlips} />}
            </div>
            <div className="row g-3 pt-2">
                <div className="col-12" align="center">
                    <button type="button" id="btnprevious" className="btn btn-outline-warning"
                        onClick={handleBack} disabled={step === 1}>Previous</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" id="btnnext" className="btn btn-outline-success"
                        onClick={handleNext} disabled={step === 6}>Next</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" id="btnsubmit" className="btn btn-outline-success"
                        onClick={submitRegistrationForm}>Submit</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>

            </div>

        </div>
    );
}

export default CustomerRegistration;