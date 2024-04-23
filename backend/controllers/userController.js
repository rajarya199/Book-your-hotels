const User = require("../models/userModel")
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);


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