const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  console.log("req.headers.token**", req.headers.token);
  let authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log("token after split", token);
    //why this need to veryfy
    jwt.verify(token, process.env.CRYPTO_CODE, (err, user) => {
      if (err) {
        console.log("json verify error", err);
        return res.status(403).json('Token not valid');
      }
    //   req.user = user;
      console.log("user ? ? ?", user);
      next();
    });
  } else {
    return res.status(401).json({ error: "token not found" });
  }
};

const verifyTokenAndauthorization=(req,res,next)=>{
  verifyToken(req,res,(data)=>{
    console.log("verifyTokenAndauthorization");
    console.log('req.res.id****',req.user.id);
    console.log('req,params.id',req.params.id);

  })
}

module.exports = { verifyToken,verifyTokenAndauthorization };



