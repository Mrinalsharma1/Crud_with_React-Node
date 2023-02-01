const mongoose = require('mongoose');
const { Schema } = mongoose;
const AddProduct = new Schema({
    pname: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    pimage: {
        type: String,
        require: true
    }

})
module.exports = mongoose.model('addproduct', AddProduct)