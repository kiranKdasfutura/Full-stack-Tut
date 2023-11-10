import axios from "axios";
// import { useSelector } from "react-redux";
// const UserJwt = useSelector((state) => state.jwt.jwts[0]);


const BASE_URL = "http://localhost:7000/api/";

if (localStorage.getItem("infiniteScrollEnabled") != null) {
 var Token =
  JSON.parse(JSON.parse(localStorage.getItem("persist:userdata")).jwt).jwts[0].text &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:userdata")).jwt).jwts[0].text.accessToken;
  
console.log("Token in userRequest api",Token);
}

  
  // console.log("Token local strorage jwt check",JSON.parse(JSON.parse(localStorage.getItem("persist:userdata")).jwt).jwts[0].text);
export const publicRequiest = axios.create({
  baseURL: BASE_URL,
});
export const apiSample=axios.create({
  baseURL:BASE_URL
})



export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${Token}`},
  });





