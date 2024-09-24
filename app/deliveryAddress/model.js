const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const deliveryAddressSchema = Schema({
    name: {
        type: String, 
        minlength: [3, 'Panjang nama minimal 3 karakter'],
        maxlength: [255, 'Panjang nama maksimal 255 karakter'],
        required: [true, 'Nama wajib diisi']
    },

    kelurahan: {
        type: String, 
        minlength: [3, 'Panjang kelurahan minimal 3 karakter'],
        maxlength: [255, 'Panjang kelurahan maksimal 255 karakter'],
        required: [true, 'Kelurahan wajib diisi']
    },

    kecamatan: {
        type: String, 
        minlength: [3, 'Panjang kecamatan minimal 3 karakter'],
        maxlength: [255, 'Panjang kecamatan maksimal 255 karakter'],
        required: [true, 'Kecamatan wajib diisi']
    },

    kabupaten: {
        type: String, 
        minlength: [3, 'Panjang kabupaten minimal 3 karakter'],
        maxlength: [255, 'Panjang kabupaten maksimal 255 karakter'],
        required: [true, 'Kabupaten wajib diisi']
    },

    provinsi: {
        type: String, 
        minlength: [3, 'Panjang provinsi minimal 3 karakter'],
        maxlength: [255, 'Panjang provinsi maksimal 255 karakter'],
        required: [true, 'Provinsi wajib diisi']
    },

    detail: {
        type: String, 
        minlength: [3, 'Panjang kabupaten minimal 3 karakter'],
        maxlength: [1000, 'Panjang alamat maksimal 255 karakter'],
        required: [true, 'alamat wajib diisi']
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

module.exports = model('DeliveryAddress', deliveryAddressSchema);