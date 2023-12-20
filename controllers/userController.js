import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({user: user._id})
  } catch (error) {



    let errors2 = {}

    if (error.code === 11000) {
      errors2.email = "The email is already registed."
    }

    if(error.name === "ValidationError"){
      Object.keys(error.errors).forEach((key)=>{
        errors2[key] = error.errors[key].message
      });
    }

    

    res.status(500).json(errors2);
  }
};


const loginUser = async (req,res) => {
  try {
    const {username,password} = req.body

    const user = await User.findOne({username})

    let same = false

    if(user){
      same = await bcrypt.compare(password,user.password)
    }else {
       return res.status(401).json({
        succeded:false,
        error: 'There is no such user',
      })
    } //return yazılmassa işleme devam edecek diğer satırlara geçecek ama kullanıcı yoksa işleme devam etmek mantıksız olduğundan dolayı return ifadesini kullanırız ki bize bu değeri dönsün ve bitsin. 

    if(same) {
      
      const token = createToken(user._id)
      res.cookie("jwt",token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 24,
      })
      res.redirect("/users/dashboard")
    }else{
      res.status(401).json({
        succeded:false,
        error:"passowrds are not matched bro "
      })
    }

  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const createToken = (userId) => {

  return jwt.sign({userId}, process.env.JWT_SECRET,{
    expiresIn:'1d',
  })
}

const getDashboardPage = (req,res)=>{
  res.render('dashboard')
}


export { createUser, loginUser,getDashboardPage};