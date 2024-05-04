
const User = require("../model/User")
let otpverify = async(req,res)=>{
    let {email, otp} = req.body
    let data = await User.find({email : email})
        if(data[0].otp == otp){
            await User.findOneAndUpdate({email : email}, {otp : "" ,verify :true})
        }
        else{
            res.send("otp not mach")
        }
}
module.exports = otpverify 
