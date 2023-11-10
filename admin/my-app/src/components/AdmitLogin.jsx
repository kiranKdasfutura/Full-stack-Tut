import React, { useState } from "react";
import { adminLogin } from "../routes/adminRoutes";
import { useNavigate } from "react-router-dom";

const AdmitLogin = () => {
  const navigate=useNavigate()

  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
 
  const adminLogHandler=(e)=>{
    e.preventDefault()
    adminLogin({name,password},navigate)
  }

  return (
    <div>
      <form action="" onSubmit={adminLogHandler}>
        <label htmlFor="">AdminID</label>
        <input
          type="text"
          placeholder="enter your ID"
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <label htmlFor="">Password</label>
        <input type="text" placeholder="enter password"
        onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdmitLogin;
