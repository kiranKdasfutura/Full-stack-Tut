import { publicRequiest, userRequest } from "./RequestMethod";
import { useDispatch } from "react-redux";
import { addjwt, logout } from "./features/JWT/jwt";

export const signupuser = async (data) => {
  console.log("api call first ?", data);
  try {
    const res = await publicRequiest.post("/users/add", data);
    console.log("signup data", res.data);
  } catch (err) {
    console.log("error on post Method", err);
  }
};
export const Login = async (data, dispatch) => {
  console.log("data from login", data);
  try {
    const res = await publicRequiest.post(
      "/users/checkUser?student=kiran",
      data
    );
    console.log("login page data response in  post Method", res.data);
    dispatch(addjwt(res.data));
  } catch (err) {
    console.log("error on login post", err);
  }
};

// export const updateUser = async (data, dispatch) => {
//   console.log("updated user info api", data);
//   try {
//     const res = await publicRequiest.put("/crud/update", data);
//     console.log("userData res", res.data.updateddata);

//   } catch (error) {
//     console.log("update Error",error);
//   }
// };

export const updateUser = async ({ name, age, password, id }) => {
  // const id = data.userID
  console.log("updateUser", id);
  try {
    console.log("api called in update");
    const res = await userRequest.put(`/crud/update/${id}`, {
      name,
      age,
      password,
    });
    console.log("user Data updated", res.data.updateddata);
  } catch (error) {
    console.log("update Error", error);
  }
};

export const getuserinfo = async (req, res) => {
  console.log("database 33");
  try {
    const res = await publicRequiest.get("/users");
    console.log("full info", res.data);
  } catch (err) {
    console.log(err);
  }
};

export const RegisterUser = async (fromData) => {
  console.log("Recive FormData to api", fromData);
  try {
    const res = await userRequest.post("/crud/signup", fromData);
    console.log("signup info", res.data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteAccount = async (userID) => {
  console.log("userID for Delete", userID);
  try {
    const res = await userRequest.delete(`/crud/update/${userID}`);
  } catch (err) {
    console.log(err);
  }
};
export const otpGenarate = async (data) => {
  const { email, inputValue } = data;
  console.log("email from api =>", email);
  console.log("otp from api =>", inputValue);

  try {
    const res = await publicRequiest.post("/users/otp", { email, inputValue });
    console.log("otp method from api", res);
  } catch (error) {
    console.log(error);
  }
};

export const getOtp = async (inputValue) => {
  console.log("from api**********", inputValue);
  try {
    const res = await publicRequiest.post("/users/otpcheck", inputValue);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
