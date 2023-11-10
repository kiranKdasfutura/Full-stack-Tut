const router = require("express").Router();
const user = require("../Models/user");
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndauthorization } = require("../verifyToken");
const multer = require("multer");

router.put("/update/:id", verifyToken, async (req, res) => {
  console.log("update by using verifyToken", req.body);
  console.log("params ID", req.params.id);
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_CODE
    ).toString();
    console.log("encrypted new passd", req.body.password);
  }
  try {
    var updateddata = await user.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    console.log("user data updated on db", updateddata);
    res.status(200).json({ message: "dataUpdated", updateddata });
  } catch (err) {
    res.status(400).json("Error");
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(200).json("account deleted");
  } catch (error) {
    res.status(500).json(error);
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
  console.log("form data in CRUD ROUTER***", req.body);
  console.log("originalname", req.body);
  console.log("backend Images", req.file);
  //
 try {
  const userdata = new user({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: CryptoJS.AES.encrypt(
      req.body.Password,
      process.env.CRYPTO_CODE
    ).toString(),
    Images: req.file.originalname,
  });
  const savedUser = await userdata.save();
  res.status(202).json(savedUser)
 } catch (error) {
  console.log(error);
 }
  //


});

module.exports = router;

// router.put("/update/:id", async (req, res) => {
//   console.log(req.body);
//   try{
// var updatedata=await user.findByIdAndUpdate(req.params.id,{
//     $set:req.body,
// },{new:true}

// )
// res.status(200).json('dataUpdated')
//   }
//   catch(err){
//     res.status(400).json('Error')
//   }
// });

// router.put("/update", async (req, res) => {
//   console.log("updated without verifyToken",req.body);
//   console.log("userID",req.body.userID);
//   if (req.body.password) {
//     req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_CODE).toString();
//     console.log("encrypted new passd",req.body.password);
// }
// try {
//   var updateddata = await user.findByIdAndUpdate(
//     req.body.userID,
//     { $set: req.body },
//     { new: true }
//   );
//   console.log("user data updated on db", updateddata);
//   res.status(200).json({ message: 'dataUpdated', updateddata });
// } catch (err) {
//   res.status(400).json('Error');
// }
// });
