const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
    id : {
        type : Number ,
        required : true ,
        unique : true ,
    },
    name : {
        type : String ,
        required : true ,
    },
    season : {
        type : Number ,
        required : true ,
    },
    number : {
        type : Number ,
        required : true ,
    },
    airdate : {
        type : String ,
    },
    summary : {
        type : String ,
    },
},

{timestamps : true}
);

module.exports = mongoose.model("Episode" , episodeSchema);