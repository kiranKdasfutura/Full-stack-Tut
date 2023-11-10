import React from 'react'
import { useSelector } from 'react-redux';

const UpdatePage = () => {
  const userData = useSelector((state) => state.jwt.jwts[0].text);
console.log(userData,'890');
  return (
    <div>
        <label htmlFor="">name</label>
        <input type="text"  value={userData.Name}/>
        <label htmlFor="">age</label>
        <input type="text"  value={userData.Age}/>
        <label htmlFor="">password</label>
        <input type="text"  />
        <label htmlFor="">img</label>
        <img src={`/Uploads/${userData.Images}`} alt="" />
        {/* <button onClick={getUserage} >  get user age </button> */}
    </div>
  )
}

export default UpdatePage