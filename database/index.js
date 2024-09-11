const mongoose = require('mongoose');
const { dbHost, dbName, dbPass, dbPort, dbUser } = require('../app/config.js');

mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`)
    .then(() => {
        console.log('Database terkoneksi');
    })
    .catch(err => {
        console.error('Gagal terkoneksi:', err);
    });

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB error:', err);
});

module.exports = db;
