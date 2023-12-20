import mongoose from "mongoose";


const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        required: [true,"Username is required"],
        minLength: [8,"At least 8 chracters"], //
        lowercase: true
    },
    email:{
        type: String,
        required: [true,"Email is required"],
        unique: true,
     
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