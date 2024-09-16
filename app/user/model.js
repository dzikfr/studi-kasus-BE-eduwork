// const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const {model, Schema} = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcrypt');

let userSchema = Schema({
    full_name: {
        type: String, 
        minlength: [3, 'Panjang nama makanan minimal 3 karakter'],
        maxlength: [255, 'Panjang nama maksimal 255 karakter'],
        required: [true, 'Nama harus diisi']
    },

    customer_id: {
        type: Number
    },

    email: {
        type: String,
        required: [true, 'Email harus diisi'],
        maxlength: [255, 'Panjang email maksimal 255 karakter']
    },

    password: {
        type: String,
        required: [true, '{Password harus diisi'],
        maxlength: [255, 'Panjang maksimal password 255 karakter'],
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

    token: [String]

}, {timestamps: true});

userSchema.path('email').validate((value)=>{
    const EMAIL_RE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return EMAIL_RE.test(value);
}, attr => `${attr.value} harus merupakan email yang valid!`);

userSchema.path('email').validate(async function(value){
    try{
        const count = await this.model('User').count({email: value});
        return !count;
    }catch(err){
        throw err
    }
}, attr => `${attr.value} sudah terdaftar`);

const HASH_ROUND = 10;
userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, HASH_ROUND);
    next()
});

userSchema.plugin(AutoIncrement, {inc_field: 'customer_id'});

module.exports = model('User', userSchema);