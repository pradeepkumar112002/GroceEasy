
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const mongourl = "mongodb+srv://Pradeepkumar_K:ppks1234@cluster0.zmhlcbb.mongodb.net/?retryWrites=true&w=majority";
const cors = require("cors");
const jwt = require("jsonwebtoken");
app.use(cors());
const JWT_SECRET ="hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

mongoose.connect(mongourl,{
    useNewUrlParser:true
}).then(()=>{console.log("Connected to Database");})
.catch(e=>console.log(e));

require("./userSchema");
const user = mongoose.model("groceEasy");
app.post("/signup",async(req,res)=>{
  const {username,password,email} =req.body;
  try{
        const oldUser = await user.findOne({username});
        if(oldUser){
            return res.send({error:"User Exist"})
        }
         await user.create({
            username,
            password,
            email,
    });
    res.send({status:"ok"});
    }
    catch(error){
        res.send({status:"error"})
    }
})
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user1 = await user.findOne({ email });
    if (!user1) {
        return res.json({ error: "User Not found" });
    }
    const a = password;
    const b = user1.password
    if (await a == b) {
        const token = jwt.sign({ username: user1.username }, JWT_SECRET, {
            expiresIn: "15m",
        });

        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "Invalid Password" });
});
app.post("/items",async(req,res)=>{
    const {email , cost} = req.body;
    const user1 = await user.findOne({email});
    try{
    await user.create({
        cost
    })
    res.send({status:"ok"});
}
catch(error){
    res.send({err:"error"},error)
}
})

app.listen(8000,()=>{
    console.log("Server Started");
})

