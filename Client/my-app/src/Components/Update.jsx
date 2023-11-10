import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteAccount, updateUser } from "../api";
import { useDispatch } from "react-redux"; // Import useDispatch

const Update = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  //   const [Images, setImg] = useState(null);
  if (localStorage.getItem("infiniteScrollEnabled") != null) {

    
  }

  const userData = useSelector((state) => state.jwt.jwts[0].text);
  const id = userData._id;
  console.log("localstorage userData from Udate ", userData);
  console.log("user id ", id);

  useEffect(() => {
    setName(userData.name);
    setAge(userData.age);
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ name, age, password, id });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAccoundHandler=async(e)=>{
    e.preventDefault();
    try {
      await deleteAccount({id})
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      style={{ padding: "100px", alignItems: "center", textAlign: "center" }}
    >
      <form onSubmit={submitHandler}>
        <>
          <h1>Update page</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            
          />
          <br></br>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required

          />
          <br />
          <label htmlFor="age">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required

          />
          <br />
          <br />
          <button type="submit">Submit</button>
          <button type="button" >delete</button>

        </>
      </form>
      <br />
    </div>
  );
};

export default Update;
