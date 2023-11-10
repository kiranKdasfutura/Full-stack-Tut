// import { adminRequest } from "../axios/adminRequestMethod";
import { adminRequest } from "../axios/adminRequestMethod";
export const adminLogin = async ({ name, password }, navigate) => {
  console.log("in adminLOgin api Name:", name);
  console.log("in adminLOgin api Password:", password);
  try {
    const result = await adminRequest.post("/admin/login", { name, password });
    console.log("admin found response", result.data);
    navigate("adminctrl");
  } catch (error) {
    console.log(error);
  }
};
export const getAlluserData=async(nvigate,dispatch,addUsers)=>{
    console.log('all users');
    try {
        const result = await adminRequest.post('/admin/alluser')
        console.log(result.data.data);
        dispatch(addUsers(result.data.data))
        nvigate('/alluser')
    } catch (error) {
        console.log(error);
    }
}