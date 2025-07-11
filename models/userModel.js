const mongoose= require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add the userName"],
    },
    email:{
        type:String,
        required:[true,"Please enter the user email address"],
        unique:[true,"Email address already taken"],
    },
    password:{
        type:String,
        required:[true,"Please add the user Password"]
    },
},
{
    timestamps:true
}
)
module.exports=mongoose.model("User",userSchema)