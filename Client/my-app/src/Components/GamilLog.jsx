import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getOtp, otpGenarate } from "../api";

const GamilLog = () => {
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");
  const [otpfield, setOtpfield] = useState(false);
  const header = useRef();

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setInputValue(value);
    }
    console.log("otp length whith +1",inputValue.length+1);
    if (inputValue.length + 1 === 4) {
      // console.log("afet 4 digit", inputValue.length);
      header.current.innerHTML =
        'Log through Gmail OTP ';
    }
  };

  const validateOtp = (e) => {
e.preventDefault()
console.log('**************');
    // if (inputValue.length === 4) {
    // If the input value is a 4-digit number, you can perform your validation here.
    if(!otpfield){
      otpGenarate({ email });
    }
    setOtpfield(true)//*** change this to insid if(inputValue.length+1 >=4 && otpfield)  ***/
    console.log("otp field",otpfield);
    // } 
    console.log('check conditions',inputValue.length+1>=4, otpfield);
    if(inputValue.length+1 >=4 && otpfield){
      otpGenarate({inputValue})
    }
    if(inputValue.length + 1 <= 4 & otpfield){
       
            // If it's not a 4-digit number, update the header text using the ref.
            header.current.innerHTML =
              'Log through Gmail OTP <span style="color: red;">Enter 4 digits OPT</span>';

    }
    
  };
  return (
    <div>
      <h1 ref={header}>Log through Gmail OTP</h1>
      <br />
      <form action="" onSubmit={validateOtp}>
        <label htmlFor="">Enter your Registered Gmail </label>
        <input
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="" style={{ display: otpfield ? " " : "none" }}>Enter your otp</label>
        <input
          style={{ display: otpfield ? " " : "none" }}
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          maxLength={4}
          placeholder="Enter a 4-digit number"
        />
        <button type="submit" >{otpfield?'Login':'Get Otp'}</button>
        <br />
      </form>
      <Link to={"/signup"}>Signup page</Link>
    </div>
  );
};

export default GamilLog;
