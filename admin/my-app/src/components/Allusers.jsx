import React from "react";
import { useSelector } from "react-redux";

const Allusers = () => {
  const users = useSelector((state) => state.admindata[0]);
  console.log("userdata", users);

  return (
    <div>
      <h1>All Users</h1>
      {users.map((user) => {
        return <ul>{user.name}</ul>;
      })}
    </div>
  );
};

export default Allusers;
