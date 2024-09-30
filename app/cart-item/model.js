const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const cartItemSchema = Schema({
    name: {
        type: String, 
        minlength: [3, 'Panjang nama minimal 3 karakter'],
        required: [true, 'Nama wajib diisi']
    },

    qty: {
        type: Number, 
        min: [1, 'minimal qty adalah satu'], 
        required: [true, 'Qty wajib diisi']
    },

    price: {
        type: Number, 
        default: 0
    },

    image_url: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    products: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = model('CartItem', cartItemSchema);