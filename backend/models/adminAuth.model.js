import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
   
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

const Admin = new mongoose.model("Admin", adminSchema);
export default Admin; 