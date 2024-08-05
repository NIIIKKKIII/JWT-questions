// Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
 

const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtpass = "secret";


const emailschema = zod.string().email();
const pass = zod.string().min(6)


function data(username, password){
const emailres = emailschema.safeParse(username);
const passres= pass.safeParse(password);

if(emailres.success && passres.success){
    return jwt.sign(username, jwtpass)
}else{
    res.json("Invalid data")
}


};

const ans = data("Nikhil.bhati@gmail.com", "sjgqedcwda");

console.log(ans);

