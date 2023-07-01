require('dotenv').config()

const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected To Mongo');
    } catch {
        console.error('Connection to mongo failed');
    }
}


module.exports = connectDb