const router = require("express").Router();
const user = require("../Models/user");
// const {} = require('')
router.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    console.log("inside server adminroute***", req.body);
    const adminFound = await user.findOne({ Name: name });
    console.log("adminFound ", adminFound);
    if (!adminFound) {
      return res.status(404).json("Admin access denied");
    }
    return res.status(200).json(adminFound);
  } catch (error) {
    console.log(error);
  }
});
router.post("/alluser", async (req, res) => {
  console.log("fetching all user from DB");

  try {
    const alluser = await user.find({});
    return res.status(200).json({
      count: alluser.length,
      data: alluser,
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
