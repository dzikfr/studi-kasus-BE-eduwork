const mongoose = require('mongoose');
const {model, Schema} = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Invoice = require('../invoice/model');

const orderSchema = Schema({
    status: {
        type: String,
        enum: ['waiting_payment', 'processing', 'in_delivery', 'delivered'],
        default: 'waiting_payment'
    },

    delivery_fee: {
        type: Number,
        default: 0
    },

    delivery_address: {
        provinsi:{ type: String, required: true },
        kabupaten:{ type: String, required: true },
        kecamatan:{ type: String, required: true },
        kelurahan:{ type: String, required: true },
        detail:{ type: String}
    },

    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    order_items:[{type: Schema.Types.ObjectId, ref: 'OrderItem'}]
}, {timestamps: true});

orderSchema.plugin(AutoIncrement, {inc_field: 'order_number'});
orderSchema.virtual('item_count').get(function(){
    return this.order_items.reduce((total, item) => total + parseInt(item.qty), 0);
});
orderSchema.post('save', async function(){
    let sub_total = this.order_items.reduce((total, item) => total += parseInt(item.qty), 0);
    let invoice = new Invoice({
        user: this.user,
        order: this._id,
        sub_total: sub_total,
        delivery_fee: parseInt(this.delivery_fee),
        total: parseInt(sub_total + this.delivery_fee),
        delivery_address: this.delivery_address
    });
    await invoice.save();
});

module.exports = model('Order', orderSchema);