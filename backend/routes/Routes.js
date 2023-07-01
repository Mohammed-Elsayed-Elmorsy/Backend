const express = require('express')
const { GetAllProducts, GetProductById } = require('../controllers/ProductController')
const router = express.Router()

router.get('/products', GetAllProducts)
router.get('/products/:id', GetProductById)

module.exports = router