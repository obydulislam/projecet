const bcrypt = require('bcrypt');
const User =  require("../model/User")

let login = async(req,res)=>{
    let {email, password} = req.body
    let loginexistring = await User.find({email : email})
        if(loginexistring.length == 0){
            res.send("credencial in not velie")
        }
        else{
            bcrypt.compare(password, loginexistring[0].password, function(err, result) {
                if(result){
                    res.send("succes Full Login")
                }
                else{
                    res.send("credencial in not velie")
                }
            });
        }
}
module.exports = login
