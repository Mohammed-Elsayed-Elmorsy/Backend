require('dotenv').config()

const products = require('./data/Products')
const connectDb = require('./config/db')
const Product = require('./models/Product')
connectDb()

const InsertData = async () => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(products)
        console.log('Data Inserted');
        // process.exit()
    } catch {
        console.error('Error with data Import to mongo');
        process.exit(1)
    }
}

// InsertData()