const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')
const Email = require("../helpers/Emailvalidation")
const User = require("../model/User")
const reqistreison = async (req,res)=>{
    let {name, email, password} = req.body

    let mailexistring = await User.find({email : email});
    if(mailexistring.length == 0){
        if(!name){
            res.send("required name")
        }
        else  if(!email){
            res.send("required email")
        }
        else  if(!password){
            res.send("required password")
        }
        else{
            if(Email){
                if(!Email(email)){
                    res.send("plesses valied Email")
                    return
                }
            }
           let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: true });
            bcrypt.hash(password, 6, async function(err, hash) {
                let user = new User({
                    name : name,
                    email : email,
                    password : hash,
                    otp : otp
                })
                user.save()
                const transporter = nodemailer.createTransport({
                    service : "gmail",
                    auth: {
                      user: "obydulislam018834@gmail.com",
                      pass: "pvjc xzhb cgbu hqwu",
                    },
                  });
                  const info = await transporter.sendMail({
                    from: process.env.BASE_EMAIL, 
                    to: email,
                    subject: "Hello BoSS ✔", 
                    html: "<b>Hello Nibir vai vala achoni ?</b>", 
                  });
                res.send({succes : "done"})
            });
        }
    }
    else{
        res.send("Email All Ready existring")
    }

   
}
module.exports = reqistreison