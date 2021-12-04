const express = require('express');
const axios = require('axios');
const router = express.Router();
// router.use(apikeyMiddleWare);

router.get('/api/products', (req, res) => {
  
    res.json([
        {name:"shubham", age:26},
        {name:"abhi", age: 27}
    ])        
})

router.get('/posts', async (req, res) => {

  let {data : {results}} = await axios.get('https://randomuser.me/api');
  let locals = Object.assign({}, res.locals, {
      title: "abhi",
      user: results[0], 
      posts: [{name: ":abhijeet"}, {name: ":shubham"}]
  })
  res.render('posts', locals)
})

router.get('/home', (req, res) => {
    // console.log("query",req.user)
    console.log("query",req.query)
    console.log("headers",req.headers)
    // const {apikey} = req.query;
    // // const {apikey} = req.headers;
    // if(apikey !== "jaiho") {
    //     return res.status(401).send("You don't have access to view this page")
    // }

    let locals = Object.assign({}, res.locals, {
        title: "Home",
        stylesheetName: "home",

    })   
    res.send(locals)
})

router.get('/about', (req, res) => {

    let locals = Object.assign({}, res.locals, {
        title: "About",
        stylesheetName: "about",
    })   
    res.render('about', locals)
})

router.get('/contact', (req, res) => {

    let locals = Object.assign({}, res.locals, {
        title: "Contact Us",
        stylesheetName: "contact",
    })   
    res.render('contact', locals)
})


    

module.exports = router;
