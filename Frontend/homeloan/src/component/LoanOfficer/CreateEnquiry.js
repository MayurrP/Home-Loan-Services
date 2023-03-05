import React, { useState } from "react";
import Axios from "axios";
const CreateEnquiry = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [mobileNo, setMobileNo] = useState();
  const [pancardNo, setPancardNo] = useState("");
  const [email, setEmail] = useState("");

  const addEnquiry = () => {
    Axios.post('http://localhost:8080/api/enquiry', {
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: email,
      mobileNo: mobileNo,
      pancardNo: pancardNo,
    }).then(() => {
      console.log("success");
    });
  }

  return (
    <section class="text-center text-lg-start">
      <div class="container py-4">
        <div class="row g-0 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card cascading-right">
              <div class="card-body p-5 shadow-5 text-center">
                <h2 class="fw-bold mb-5">ENQUIRY FORM</h2>
                <form>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" id="form3Example1" class="form-control"
                          name="firstName"
                          value={firstName}
                          onChange={(event) => { setFirstName(event.target.value); }}

                        />
                        <label class="form-label" for="form3Example1">FIRST NAME</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" id="form3Example2" class="form-control"
                          name="lastName"
                          value={lastName}
                          onChange={(event) => { setLastName(event.target.value); }}

                        ></input>
                        <label class="form-label" for="form3Example2">LAST NAME</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="number" id="form3Example2" class="form-control"
                          name="age"
                          value={age}
                          onChange={(event) => { setAge(event.target.value); }}
                        ></input>
                        <label class="form-label" for="form3Example2">AGE</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="number" id="form3Example2" class="form-control"
                          name="mobileNo"
                          value={mobileNo}
                          onChange={(event) => { setMobileNo(event.target.value); }}

                        ></input>
                        <label class="form-label" for="form3Example2">MOBILE NO</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <input type="text" id="form3Example4" class="form-control"
                        name="pancardNo"
                        value={pancardNo}
                        onChange={(event) => { setPancardNo(event.target.value); }}

                      ></input>
                      <label class="form-label" for="form3Example4">Pancard NO</label>
                    </div>
                  </div>
                  {/* Email */}
                  <div class="form-outline mb-4">
                    <input type="email" id="form3Example3" class="form-control"
                      name="email"
                      value={email}
                      onChange={(event) => { setEmail(event.target.value); }}

                    ></input>
                    <label class="form-label" for="form3Example3">EMAIL ID</label>
                  </div>
                  {/* Submit button */}
                  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={addEnquiry}>
                    Submit
                  </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button type="reset" class="btn btn-primary btn-block mb-4">
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateEnquiry;