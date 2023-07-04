const express = require('express')
require('dotenv').config()

const cors = require('cors')
const app = express()
const bodyparser = require('body-parser')
const cookieParser = require("cookie-parser")
app.use(cookieParser())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
    next();
})
app.use(express.static(__dirname));
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }))
const connectDb = require('./config/db')

const router = require('./routes/Routes')

app.use(express.json())

app.use(router)

connectDb()


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))