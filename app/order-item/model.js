const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const orderItemSchema = Schema({
    name: {
        type: String,
        minLength: [5, 'Minimal 5 karakter'],
        required: true
    },

    price: {
        type: Number,
        required: [true, 'harga wajib ada']
    },

    qty: {
        type: Number,
        required: true,
        min: [1, 'qty minimal satu']
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }
});

module.exports = model('OrderItem', orderItemSchema);