const User = require("../models/userModel")
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt=require('jsonwebtoken')
const jwtSecret='asdfghjklasdf456' //just a random string

  exports.regUser= async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const userDoc = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
      });
      res.json(userDoc);
    } 
    catch (e) {
      res.status(422).json(e);
    }
  };

  exports.signinUser=async(req,res)=>{
    const {email,password}=req.body;
    const userDoc=await User.findOne({email});
    if(userDoc){
      const passok=bcrypt.compareSync(password,userDoc.password);
      if(passok){
        //id from mongodb
        //3rd params as empty option ,fourth is callback fn
        jwt.sign(
          {email:userDoc.email,
          id:userDoc._id,
          
        },jwtSecret,{},(err,token)=>{
          if(err) throw err;
          res.cookie('token',token).json(userDoc)
        })

      } else{
        res.status(422).json('passwpord not ok')
      }
    } else{
      res.status(503).json(' email not found')

    }
  }
  exports.userProfile=async (req,res) => {
    
    const {token} = req.cookies;
    if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const {name,email,_id} = await User.findById(userData.id);
        res.json({name,email,_id});
      });
    } else {
      res.json(null);
    }
  };