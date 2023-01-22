const { default: mongoose } = require('mongoose');
const con = require('mongoose')
const { Schema } = con

const userSchema = new Schema({
    fname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true,
    },
    pin: {
        type: Number,
        require: true,
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    // addharcard: {
    //     type: String,
    //     required: true
    // },
    // image: {
    //     data: Buffer,
    //     contentType: String
    // },
    date: {
        type: Date,
        default: Date.now,
        require: true
    }
});
module.exports = mongoose.model("UserData", userSchema);