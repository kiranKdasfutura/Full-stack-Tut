import React from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../features/JWT/jwt";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Getjwt() {
  // console.log(props.user);
  // const UserJwt = useSelector((state) => state.jwts.text);
  // console.log("last reder", UserJwt);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    // props.setUser(null);
    // console.log("Logout trigerd");
    dispatch(logout());
  };
  return (
    <div>
      <h1>Home</h1>
      {/* <h3 style={{color:'blue'}}>{props.user.text.name} </h3>
      <h4 style={{color:'green'}}>{props.user.text.age} </h4> */}
      <button onClick={logoutHandler }>Logout</button>
      <Link to='update'  >update</Link>
    </div>
  );
}

export default Getjwt;
