//- Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise


const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtpass = "secret";


const emailschema = zod.string().email();
const pass = zod.string().min(6)           // made schemas for both email and pass 


function data(username, password){
const emailres = emailschema.safeParse(username);
const passres= pass.safeParse(password);          // learn this syntax 

if(emailres.success && passres.success){
    return jwt.sign(username, jwtpass)
}else{
    res.json("Invalid data")
}


};

const ans = data("Nikhil.bhati@gmail.com", "sjgqedcwda");

console.log(ans);

function jwtdecode(){
const DECODED = jwt.decode(ans)   // another function in JWT library jaha se directly we can decode
if(DECODED){
    return true;
}else{
    return false;   // point to note here is that it can be coded without any passwrod or secret key.
}
}

let ans1 = jwtdecode(ans)
console.log(ans1)