import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name :{
    type: String, 
    min: [2, "Minimum length is 2"], 
    max: [20, "minimum length is "], 
        required: true,
}, 
    /*middleName :{
    type: String, 
    min: [2, "Minimum length is 2"], 
    max: [20, "minimum length is "], 
}, 
    lastName :{
    type: String, 
    min: [2, "Minimum length is 2"], 
    max: [20, "minimum length is "], 
        required: true,
    },*/ 
    email: {
        type: String, 
        required: true
    }, 
    password: {
        type: String,
        min: [5, "Minimum length is 5"], 
        max: [5, "Maximum length is 5"], 
        required: true
    },
    
});

const User = new mongoose.model("User", UserSchema);
export default User; 