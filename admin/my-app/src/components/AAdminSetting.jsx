import React from "react";
import { getAlluserData } from "../routes/adminRoutes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../Redux/adminSlice";
function AAdminSetting() {
  const dispatch=useDispatch()
  const nvigate = useNavigate();
  const handleAccessUsers = () => {
    console.log("all users called");
    getAlluserData(nvigate,dispatch,addUsers);
  };

  return (
    <>
      <h1>Admin Panel</h1>
      <div>
        <h3>Get all Users details</h3>
        <button onClick={handleAccessUsers}>Access users</button>
      </div>
      <div>
        <h3>Create Co-admin</h3>
        <button onClick={() => alert("currently not avilable")}>
          Co-admin
        </button>
      </div>
    </>
  );
}

export default AAdminSetting;
