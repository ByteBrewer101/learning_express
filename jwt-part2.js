const jwt = require('jsonwebtoken')


//decode ,verify ,generate

const value = {
    name : "name1",
    accNumber : 123123
}


//jwt
const token = jwt.sign(value , 'secret');
console.log(token);