const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next) =>{
const token=req.headers["Authorization"]?.split(" ")[1];
if(!token){
  res.status(401).json({message: "Access denied,Token not provided"});
}
try{
  const decoded = jwt.verify(token,"my_secret");
  req.user = decoded;
  next();
}catch(err){
  return res.status(500).json({ message: "Access denied"});
}
}
module.exports=authMiddleware;