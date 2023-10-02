
import { publicRequiest } from "./RequestMethod";
import {useDispatch} from 'react-redux'
import {addjwt} from './features/JWT/jwt'


export const signupuser = async (data) => {
  console.log('api call first ?', data);
  try {
    const res = await publicRequiest.post('/users/add', data); 
    console.log('signup data', res.data); 
  } catch (err) {
    console.log("error on post Method", err);
  }
};


export const Login=async(data,dispatch)=>{
  console.log("data from login",data);
  try{
    const res =await publicRequiest.post('/users/checkUser',data)
    console.log('login page data response in  post Method',res.data);
    dispatch(addjwt(res.data))
  }

  catch(err){
    console.log('error on login post',err);
  }
 
 }
export const getuserinfo=async(req,res)=>{
  console.log('database 33');
  try{
    const res=await publicRequiest.get('/users');
    // console.log('database 11');
  console.log('full info',res.data);
  }
  catch(err){
    console.log(err);
  }
}

export const RegisterUser=async(fromData)=>{
  console.log('Recive FormData in api',fromData);
  try{
    const res= await publicRequiest.post('users/signup',fromData)
    console.log('signup info',res.data);
  }catch(err){
    console.log(err);
  }
}



