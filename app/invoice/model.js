const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const invoiceSchema = Schema({
    sub_total:{
        type: Number,
        required: [true, 'sub total wajib ada']
    },

    delivery_fee:{
        type: Number,
        required: [true, 'delivery fee wajib ada']
    },

    delivery_address:{
        provinsi: {type: String, required: [true, 'provinsi wajib ada']},
        kabupaten: {type: String, required: [true, 'kabupaten wajib ada']},
        kecamatan: {type: String, required: [true, 'kecamatan wajib ada']},
        kelurahan: {type: String, required: [true, 'keluarahan wajib ada']},
        detail: {type: String},
    },

    total:{
        type: Number,
        required: [true, 'total wajib ada']
    },

    payment_status:{
        type: String,
        enum: ['waiting_payment', 'paid'],
        default: 'waiting_payment'
    },

    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    order: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }]
}, {timestamps: true});

module.exports = model('Invoice', invoiceSchema);