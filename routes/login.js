const express = require('express');

const router = express.Router();
const {createToken} = require("../helper");
const apikeyMiddleWare = require("../middle-ware/apiKey");

/* GET home page. */
router.post('/login', async (req, res) => {

    if(req.body.email === "abhijeet@gmail.com" && req.body.password === "abc123") {

      const token = await createToken({email : req.body.email, id: 1})
      return res.status(200).json({token});
    }
    
    return res.status(401).json();
})

module.exports = router;
