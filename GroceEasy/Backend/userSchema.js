const mongoose = require("mongoose");
const useSchema = new mongoose.Schema(
    {
        username : {type:String, unique:true},
        password : String,
        email : String        
    },
    {
        collection:"groceEasy"
    }

);
mongoose.model("groceEasy",useSchema);