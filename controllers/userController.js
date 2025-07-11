const expressAsyncHandler = require("express-async-handler");
const User=require("../models/userModel")
const jwt=require("jsonwebtoken")
const bcrypt= require("bcrypt")
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser=expressAsyncHandler(async(req,res)=>{
    

    const {username,email,password}= req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All feilds are mandatory")
    }
  

    const userAvailable = await User.findOne({ email })
    if(userAvailable){
          res.status(400)
        throw new Error("User already Available")
    }
      console.log("trigger1");
    
    //HashPassword
    const hashedPassword=await bcrypt.hash(password,10)
    console.log("hpass",hashedPassword);
    
    const user= await User.create({
        username,
        email,
        password:hashedPassword,
    })
    console.log(`User is created ${user}`);
    if(user){
        res.status(210).json({id: user.id,email:user.email});
    }else{
        res.status(400)
        throw new Error("User data is not vaild")
    }
    res.json({message:"Register the user"})
})
//@desc login a user
//@route POST /api/users/login
//@access public
const loginUser=expressAsyncHandler(async(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error("All feilds are mandatory")
    }
    const user= await User.findOne({email})
    //compare password with hashedpassword
    if(user && await (bcrypt.compare(password,user.password))){
        const accessToken= jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            },
        },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:"10m"}
)
        res.status(200).json({accessToken})
    }
    else{
        res.status(401)
        throw new Error("Email or password is not vaild")
    }
  
})
//@desc Current  user info
//@route POST /api/users/current
//@access private
const currentUser=expressAsyncHandler(async(req,res)=>{
    res.json(req.user)
})

module.exports={registerUser,loginUser,currentUser}