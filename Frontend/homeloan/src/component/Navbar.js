import React from "react";
import { useState } from "react";
const Navbar = () =>{
      const [step, setStep] = useState(1);
    
      const handleNextStep = () => {
        setStep(step + 1);
      }
    
      const handlePreviousStep = () => {
        setStep(step - 1);
      }
    
      const renderButton = () => {
        if (step === 1) {
          return <button onClick={handleNextStep}>Next</button>;
        } else if (step === 2) {
          return (
            <>
              <button onClick={handlePreviousStep}>Previous</button>
              <button onClick={handleNextStep}>Next</button>
            </>
          );
        } else {
          return (
            <>
              <button onClick={handlePreviousStep}>Previous</button>
              <button type="submit">Submit</button>
            </>
          );
        }
      }
    
      return (
        <form>
          {/* render form inputs based on the current step */}
          {step === 1 && (
            <>
              <label htmlFor="input1">Input 1:</label>
              <input id="input1" type="text" />
            </>
          )}
          {step === 2 && (
            <>
              <label htmlFor="input2">Input 2:</label>
              <input id="input2" type="text" />
            </>
          )}
          {step === 3 && (
            <>
              <label htmlFor="input3">Input 3:</label>
              <input id="input3" type="text" />
            </>
          )}
    
          {/* render the button based on the current step */}
          {renderButton()}
        </form>
      );
    }
    


export default Navbar;