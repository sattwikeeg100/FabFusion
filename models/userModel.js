const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
        firstname:{
            type:String,
            required:true,
        },
        lastname:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        mobile:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            default: "user"
        },
        isBlocked:{
            type: Boolean,
            default:false
        },
        cart:{
            type:Array,
            default: []
        },
        address:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address"
        }],
        wishList:[{
            type: mongoose.Schema.Types.ObjectId,
        }],
        refreshToken:{
            type: String,
        },
        passwordChangedAt: Date,
        passwordResetToken: String,
        passwordResetExpires: Date
    },
    {
        timestamps: true,
    }
);


userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.methods.isPasswordMatched = async function (enterPassword){
    return await bcrypt.compare(enterPassword, this.password);
};

userSchema.methods.createPasswordResetToken = async function (enterPassword){
    const resettoken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto
        .createHash("sha256")
        .update(resettoken)
        .digest("hex");
    this.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 30 minutes
    return resettoken; 
};

//Export the model
module.exports = mongoose.model('User', userSchema);