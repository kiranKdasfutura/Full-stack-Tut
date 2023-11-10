import React, { useState } from "react";
import { RegisterUser, getuserinfo, signupuser } from "../api";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const UserPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [Images, setImg] = useState({});

  const formData = new FormData();
  formData.append("Name", name);
  formData.append("Email", email);
  formData.append("Password", password);
  formData.append("Images", Images);


  function submitHandler(e){
    e.preventDefault();
    console.log("formData after submithandler",formData);
    try {
      console.log("RegisterUser");
      RegisterUser(formData);
    } catch (error) {
      console.error("Error on FormData submition:", error);
    }
  };

  return (
    <div
      style={{ padding: "100px", alignItems: "center", textAlign: "center" }}
    >
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <>
          <h1>Signup page</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <label htmlFor="age">Email</label>
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="Enter your Email "
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />

          <label htmlFor="Image">choose your photo</label>
          <input
            type="file"
            name="Images"
            id="Images"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <br />
          <button type="submit">Submit</button>
        </>
      </form>
      <br />

      <Link to={"/login"}>already have an account</Link>
    </div>
  );
};

export default UserPage;

{
  /* <>
  <form onSubmit={submitHandler} encType="multipart/form-data">
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="text"
      placeholder="Age"
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setpassword(e.target.value)}
    />
    {/* <input
    type="file"
    accept="image/*"
    onChange={(e) => setImg(e.target.files[0])}
  // /> */
}
//     <input type="submit" value="Submit" />
//   </form>
//   <br />
//   <Link to="/login">Already have an account?</Link>
// </>; */}
