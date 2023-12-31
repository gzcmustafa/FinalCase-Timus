import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from 'validator';

const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        required: [true,"Username is required"],
        minLength: [8," Username must be at least 8 chracters"], //
        lowercase: true
    },
    email:{
        type: String,
        required: [true,"Email is required"],
        unique: true,
        validate: [validator.isEmail, "Valid email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        
    }
    
},
{
    timestamps:true,
}
);

userSchema.pre("save", function(next) {
const user = this
bcrypt.hash(user.password,10,(err,hash)=>{
    user.password= hash;
    next();
})
})

const User = mongoose.model('User',userSchema);
export default User;