const users=require('../Models/userSchema')
const jwt = require('jsonwebtoken')


exports.register=async(req,res)=>{
    console.log("Inside register function");
    try{
        const {username,email,password} = req.body
        console.log(`${username} ${email} ${password}`);
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(402).json("Users already exists")
        }
        else{
            const newUser = new users({
                username,email,password,github:"",link:"",profile:""

            })
            await newUser.save()
            res.status(200).json("User created successfully")
        }
    }
    catch(err){
        res.status(500).json('server error' + err.message)
    }
}



exports.login=async(req,res)=>{
    const {email,password}=req.body

   
    try{
    
        const user = await users.findOne({email,password})
        if(user){
           
            const token =jwt.sign({userId:user._id},"superkey2024")
            console.log(token);
            res.status(200).json({user,token})
        }
        else{
          
            res.status(401).json("User not found")
        }
    }
    catch(err){
        res.status(500).json('server error'+err.message)
    }
}
   
