import { useState } from "react";
import "./App.css";
import Getjwt from "./Components/Getjwt";
import LoginUser from "./Components/LoginUser";
import UserDeatils from "./Components/UserDeatils";
import UserPage from "./Components/UserPage";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Updat from "./Components/Updat";
import Update from "./Components/Update";
import UpdatePage from "./UpdatePage";
import GamilLog from "./Components/GamilLog";
function App() {
  // const [user, setUser] = useState();

  const UserJwt = useSelector((state) => state.jwt.jwts[0]);

  // setUser(UserJwt);
  // console.log("from app.js",UserJwt);
  var token = UserJwt && UserJwt.text.accessToken;
  console.log("token", token);
  const router = createBrowserRouter([
    
    {
      path: "/",
      // element: user ? <Getjwt user={user}   setUser={setUser}  /> : <LoginUser />,
      element: token ? <Getjwt /> : <LoginUser />,
    },
    {
      path: "signup",
      element: <UserPage />,
    },
    {
      path: "update",
      // element: token ? <Update /> : <LoginUser />,
      element:<UpdatePage/>
    },
    {
      path: "gamil",
      // element: token ? <Update /> : <LoginUser />,
      element:<GamilLog/>
    },
  ]);

  return (
    // <div className="App">
    // <UserPage/>
    // <UserDeatils/>
    // <LoginUser/>C
    // <Getjwt/>
    // </div>
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
