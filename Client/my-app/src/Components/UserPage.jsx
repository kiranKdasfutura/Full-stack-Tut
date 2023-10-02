import React, { useState } from "react";
import { RegisterUser, getuserinfo, signupuser } from "../api";
import { Link } from "react-router-dom";

const UserPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setpassword] = useState("");
  const [Images, setImg] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitHandler called");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("password", password);
    formData.append("Images", Images);
    try {
      // await RegisterUser(formData); 
      
        console.log(formData);
      
      
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
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
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <Link to="/login">Already have an account?</Link>
    </>
  );
};

export default UserPage;

// // <div
//     //   style={{ padding: "100px", alignItems: "center", textAlign: "center" }}
//     // >
//     <>
//       {/* <for onSubmit={submitHandler} encType="multipart/form-data" > */}
//       <form  onSubmit={submitHandler}>
//         <>
//         <h1>Signup page</h1>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br></br>
//         <label htmlFor="age">Age</label>
//         <input
//           type="number"
//           id="age"
//           name="age"
//           placeholder="Enter age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//         <br />
//         <label htmlFor="age">Password</label>

//         <input
//           type="password"
//           id="password"
//           name="password"
//           placeholder="password"
//           value={password}
//           onChange={(e) => setpassword(e.target.value)}
//         />
//         <br />

//         <label htmlFor="">choose your photo</label>
//         <input
//           type="file"
//           name="Images"
//           id="Images"
//           onChange={(e) => setImg(e.target.files[0])}
//         />
//         <br />
//         <button  type="submit">Submit</button>
//         </>
//       </form>
//       <br />

//       <Link to={"/login"}>already have an account</Link>
//     {/* </div> */}
//     </>