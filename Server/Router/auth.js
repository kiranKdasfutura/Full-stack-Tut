const router = require("express").Router();
const user = require("../Models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
// import {} from 'react'
// const useDispatch = require('react')

router.post("/add", async (req, res) => {
  try {
    const { name, age, password } = req.body;
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.CRYPTO_CODE
    ).toString();
    const newUser = new user({
      name,
      age,
      password: encryptedPassword,
    });
    const savedUser = await newUser.save();
    console.log("savedUser", savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/checkUser", async (req, res) => {
  const student = req.query.student;
  console.log("query", student);
  try {
    const { name, password } = req.body;
    console.log(name, "done 123");
    const foundUser = await user.findOne({ Name: name });
    console.log(foundUser, "done 123");
    if (!foundUser) {
      return res.status(401).json("Account not found");
    }
    const decryptedPassword = CryptoJS.AES.decrypt(
      foundUser.Password,
      process.env.CRYPTO_CODE
    ).toString(CryptoJS.enc.Utf8);
    if (decryptedPassword !== password) {
      return res.status(401).json("Invalid password");
    }
    const accessToken = jwt.sign(
      {
        id: foundUser._id,
      },
      process.env.CRYPTO_CODE,
      { expiresIn: "1d" }
    );

    const { password: _, ...others } = foundUser._doc;
    console.log(others, "****");
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    // const users = await user.aggregate([{$group:{_id:'$Name'}}])
    // const users = await user.aggregate([{$group:{_id:'$Name'}}]);
    // const users = await user.aggregate([{$project:{Name:1,_id:0}}]);
    // const users = await user.aggregate([{$project:{Name:1,_id:0}},{$group:{_id:{age:'$name'}}}]);
    // const users = await user.aggregate([{$m:{_id:'$Name'}}]);
    // find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../Client/my-app/public/Uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post("/signup", upload.single("Images"), async (req, res) => {
  console.log("backend", req.body);
  console.log("originalname8888888", req.body);
  console.log("backend Images", req.file);
  const userdata = new user({
    ame: req.body.name,
    age: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_CODE
    ).toString(),
    Images: req.file.originalname,
  });
  //
  res.status(202).json(userdata);
});
// const res = await publicRequiest.put('/users/otp',email)

router.post("/otp", async (req, res) => {
  console.log("check data structure**********", req.body);
  const { email, inputValue } = req.body;
  // const email = req.body.email;
  
  if (email) {
    console.log("email from auth", email);
    function generateOTP() {
      return Math.floor(1000 + Math.random() * 9000).toString();
    }
    const otpExpiration = new Date(Date.now() + 5 * 60 * 1000);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    //
    try {
      const foundUser = await user.findOne({ Email: email });
      console.log("Email status after findone", foundUser);
      if (foundUser) {
        console.log("user found******", foundUser);
        const otp = generateOTP();
        const updateData = {
          Name: foundUser.Name,
          Email: foundUser.Email,
          Password: foundUser.Password,
          Images: foundUser.Images,
          OtpExpiration: otpExpiration,
          Otp: otp,
        };

        const userID = foundUser._id;
        try {
          var updatedDocument = await user.findByIdAndUpdate(
            userID,{
            $set:updateData,
            },
            { new: true, useFindAndModify: false }
          );
          console.log("Document Updated", updatedDocument);
          if (updatedDocument) {
            const mailoption = {
              from: process.env.EMAIL,
              to: email,
              subject: "Your OTP Code ",
              text: `Your otp:${otp}`,
            };
            const info = await transporter.sendMail(mailoption);
            console.log("Email options***", info.response);
          }
        } catch (error) {
          console.log(error);
        }
        // return res.status(200).json({ message: "User found" });
      } else {
        console.log("This mail not registerd with db");
        return res.status(404).json({ message: "no user found" });
      }
    } catch (error) {
      console.log(error);
    }
  } else if(inputValue) {
    const getuser=await user.findOne({Otp:inputValue})

    console.log("otp from auth", inputValue);
    console.log("checkupdatedDocument",getuser);

    if(inputValue===getuser.Otp){
      console.log("you are entered correct otp");
    }
    else{
      console.log("check entered OTP");
    }


    // const otp=updatedDocument.Otp
    // if(otp==inputValue){
    //   console.log("check otp valid ",otp==inputValue);
    // }

  }
});

module.exports = router;
