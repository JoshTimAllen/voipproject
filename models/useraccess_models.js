import mongoose from "mongoose";
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    }
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema);
// module.exports = User;