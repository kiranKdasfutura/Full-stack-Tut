import React, { useState } from 'react';
import { Login } from '../api';
import {Link} from 'react-router-dom'

import { useDispatch } from 'react-redux'; // Import useDispatch

const LoginUser = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const submitHandler = async (e) => {
    e.preventDefault();
        
    try {
      // Pass dispatch as an argument to the Login function
      await Login({ name, password }, dispatch);
      setName("");
      setPassword("");
      // console.log("Data submitted successfully");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div style={{padding:'100px',alignItems:'center',textAlign:'center',lineHeight:'2'}}>
    
      <h1>User Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label htmlFor="name">Password</label>
    
        <input
          type="password"
          id="age"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button type="submit">Submit</button><br />
        <Link to={'/signup'}>signup page</Link>

      </form>
    </div>
  );
}

export default LoginUser;
