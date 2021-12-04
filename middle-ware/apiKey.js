const apiKey = (req, res, next)=>{

    const apikey = "1234567"
    // const api_key = req.quary;
    const userApiKey = req.query.api_key;
    // console.log(req.query, "shubh");

    if(userApiKey && (userApiKey===apikey)){

        next();
    }

    res.send("You are not authorized person")

}

module.exports = apiKey;