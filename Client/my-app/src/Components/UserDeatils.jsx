import React, { useEffect, useState } from "react";
import { publicRequiest } from "../RequestMethod";

const UserDeatils = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("props data", props.data);
    console.log("use effect");
    // setUsers()
  }, [props]);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDeatils;
// publicRequiest
// .get("/api/users")
// .then((response) => {
//   console.log('response from get',response);
//   setUsers(response.data);
// })
// .catch((error) => {
//   console.error("Error fetching users:", error);
// });
