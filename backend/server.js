const express = require('express')

require('dotenv').config()

const app = express()
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
    next();
})
const cors = require('cors')
app.use(express.static(__dirname));
app.use(cors({ credentials: true, origin: ['http://localhost:3000', 'http://127.0.0.1:5500', '*'] }))
const connectDb = require('./config/db')

const router = require('./routes/Routes')

app.use(express.json())

app.use(router)

connectDb()


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))