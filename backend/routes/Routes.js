const express = require('express')
const { GetAllProducts, GetProductById, GetProductByIdAndUpdate } = require('../controllers/ProductController')
const { Register, Login } = require('../controllers/UserController')

const router = express.Router()

router.post('/register', Register)
router.post('/login', Login)
router.get('/products', GetAllProducts)
router.get('/products/:id', GetProductById)
router.put('/products/:id', GetProductByIdAndUpdate)

module.exports = router