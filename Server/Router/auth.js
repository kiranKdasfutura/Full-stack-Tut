const router = require("express").Router();
const user = require("../Models/user");
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const multer=require('multer')
// import {} from 'react'
// const useDispatch = require('react')

router.post("/add", async (req, res) => {
  try {
    const { name, age, password } = req.body;
    const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.CRYPTO_CODE).toString();
    const newUser = new user({
      name,
      age,
      password: encryptedPassword
    });
    const savedUser = await newUser.save();
    console.log("savedUser", savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/checkUser', async (req, res) => {
  try {
    const { name, password } = req.body;
    const foundUser = await user.findOne({ name });

    if (!foundUser) {
      return res.status(401).json('Account not found');
    }

    const decryptedPassword = CryptoJS.AES.decrypt(foundUser.password, process.env.CRYPTO_CODE).toString(CryptoJS.enc.Utf8);

    if (decryptedPassword !== password) {
      return res.status(401).json('Invalid password');
    }

    const accessToken = jwt.sign(
      {
        id: foundUser._id
      },
      process.env.CRYPTO_CODE,
      { expiresIn: '1d' }
    );

    const { password: _, ...others } = foundUser._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'../../Client/my-app/public/Uploads')
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  }
})

const upload=multer({storage:storage})
router.post('/signup',upload.single('Images'),(req,res)=>{
  console.log('backend',req.body);
  console.log('originalname',req.body);

  console.log('backend Images',req.file);
  const userdata = new user({
    name:req.body.name,
    age:req.body.age,
    password: CryptoJS.AES.encrypt(
      req.body.password,process.env.CRYPTO_CODE
    ).toString(),
      Images:req.file.originalname
  })
})

module.exports = router;
