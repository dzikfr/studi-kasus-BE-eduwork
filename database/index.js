const mongoose = require('mongoose');
const {dbHost, dbName, dbPass, dbPort, dbUser} = require('../app/config.js')
mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`);

const db = mongoose.connection;

db.on('open', () => {
    // server.listen(port);
    // server.on('error', onError);
    // server.on('listening', onListening);
    console.log('Database running')
})

module.exports = db;