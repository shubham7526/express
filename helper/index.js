const jwt = require("jsonwebtoken");

const createToken = async(data)=>{
    console.log(data)
    const token  = jwt.sign(data, 'secret', { expiresIn: '1h' });

    return token;
}

const verifyToken = (token) => {
    try {
        const data = jwt.verify(token, 'secret');
        return data
    }
    catch(err) {
        return {}
    }
}


module.exports = {createToken, verifyToken};