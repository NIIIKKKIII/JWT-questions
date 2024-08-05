//- Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise


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

function VERIFIED(){
    const veri = jwt.verify(ans,jwtpass )
    if(veri){
        return true
    }else{
        return false
    }
}

 let hehe = VERIFIED(ans)
 console.log(hehe)
