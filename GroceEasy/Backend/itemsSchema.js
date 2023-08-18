const mongoose = require("mongoose");
const itemsSchema = new mongoose.Schema(
    {
        email : String,
        cost : String
    },
    {
        collection:"groceItems"
    }

);
mongoose.model("groceEasy",itemsSchema);