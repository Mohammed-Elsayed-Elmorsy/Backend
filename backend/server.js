const express = require('express')

require('dotenv').config()

const app = express()
const cors = require('cors')
app.use(express.static(__dirname));
app.use(cors({ credentials: true, origin: ['http://localhost:3000', '*'] }))
const connectDb = require('./config/db')

const router = require('./routes/Routes')

app.use(express.json())

app.use(router)

connectDb()


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))