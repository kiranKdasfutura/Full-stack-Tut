import logo from "./logo.svg";
import "./App.css";
import AdminPage from "./components/AdminPage";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import AdminSetting from "./components/AdminSetting";
import Allusers from "./components/Allusers";
import AdminSetting from "./components/AAdminSetting";
// import AdminHome from "./components/adminSetting";
const router = createBrowserRouter([
  {
    path:"/",
    element:<AdminPage/>
  },
  {
    path:"adminctrl",
    element:<AdminSetting/>
  },
  {
    path:"alluser",
    element:<Allusers/>
  }
])
function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
