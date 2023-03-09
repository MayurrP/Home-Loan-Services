import React, { useState } from 'react';
import AppPersonalDetails from "./Registration/AppPersonalDetails";
import AddressDetails from "./Registration/AddressDetails";
import AccPropertyDetails from "./Registration/AccPropertyDetails";
import DocUpload from "./Registration/DocUpload";
import GuarantorDetails from "./Registration/GuarantorDetails";
import ProfessionDetails from "./Registration/ProfessionalDetails";
import "./CustomerRegistration.css";
import Axios from 'axios';

const CustomerRegistration = () => {
    const [step, setStep] = useState(1);
    const [obj1, setObj1] = useState('');
    const [obj2, setObj2] = useState('');
    const [obj3, setObj3] = useState('');
    const [obj4, setObj4] = useState('');
    const [obj5, setObj5] = useState('');
    const [obj6, setObj6] = useState('');

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    // const submitRegistrationForm =()=>{
    //     Axios.post('http://localhost:8080/CustomerController/customer',{
    //         customerName:obj1.customerName,
    //         customerDateOfBirth:obj1.customerDateOfBirth,
    //         customerAge:obj1.customerAge,
                    
    //     })
    // }
    console.log(obj1);
    console.log(obj2);
    console.log(obj3);
    console.log(obj4);
    console.log(obj5);
    console.log(obj6);
    return (
        <div>
            <div className='stepcss1'>
                {step === 1 && <AppPersonalDetails onAppPersonalDetails={setObj1} />}
            </div>
            <div className='stepcss2'>
                {step === 2 && <AddressDetails onAddressDetails={setObj2} />}
            </div>
            <div className='stepcss3'>
                {step === 3 && <ProfessionDetails onProfessionDetails={setObj3} />}
            </div>
            <div className='stepcss4'>
                {step === 4 && <AccPropertyDetails onAccPropertyDetails={setObj4} />}
            </div>
            <div className='stepcss2'>
                {step === 5 && <GuarantorDetails onGuarantorDetails={setObj5} />}
            </div>
            <div className='stepcss2'>
                {step === 6 && <DocUpload onDocUpload={setObj6} />}
            </div>
            <div className="row g-3 pt-2">
                <div className="col-12" align="center">
                    <button type="button" id="btnprevious" className="btn btn-outline-warning"
                        onClick={handleBack} disabled={step === 1}>Previous</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" id="btnnext" className="btn btn-outline-success"
                        onClick={handleNext} disabled={step === 6}>Next</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <button type="button" id="btnsubmit" className="btn btn-outline-success"
                        onClick={submitRegistrationForm}>Submit</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                </div>

            </div>

        </div>
    );
}

export default CustomerRegistration;