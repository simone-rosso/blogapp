const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:PoN5CfO5Ld6KazPG@blogapp.ismi8ze.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

const db = module.exports = () => {
    let connectionParameters = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }

    try {
        mongoose.connect(uri, connectionParameters)
        console.log('Mongoose Connection Succeeded.')
    } catch (e) { console.warn('connection error ', e) }
}

db()