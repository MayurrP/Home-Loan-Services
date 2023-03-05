import React, { useState } from 'react';
import AppPersonalDetails from "./Registration/AppPersonalDetails";
import AddressDetails from "./Registration/AddressDetails";
import AccPropertyDetails from "./Registration/AccPropertyDetails";
import DocUpload from "./Registration/DocUpload";
import GuarantorDetails from "./Registration/GuarantorDetails";
import ProfessionDetails from "./Registration/ProfessionalDetails";

const CustomerRegistration = () => {

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };


    return (
        <div>
            {step === 1 && <AppPersonalDetails />}
            {step === 2 && <AddressDetails />}
            {step === 3 && <ProfessionDetails />}
            {step === 4 && <AccPropertyDetails />}
            {step === 5 && <GuarantorDetails />}
            {step === 6 && <DocUpload />}

            <button onClick={handleBack} disabled={step === 1}>Back</button>
            <button onClick={handleNext} disabled={step === 6}>Next</button>
        </div>
    );
}

export default CustomerRegistration;