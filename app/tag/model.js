const mongoose = require('mongoose');
const {model, Schema} = mongoose;

let tagSchema = Schema({
    name: {
        type: String, 
        minlength: [3, 'Panjang nama tag minimal 3 karakter'],
        maxLength: [20, 'Panjang nama tag maksimal 20 karakter'],
        required: [true, 'Nama kategori harus diisi']
    }
    
});

module.exports = model('Tag', tagSchema);