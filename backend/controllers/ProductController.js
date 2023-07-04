const Product = require('../models/Product')
const GetAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        console.error(error)
    }
}

const GetProductById = async (req, res) => {
    try {
        const productDoc = await Product.findById(req.params.id)
        res.status(200).json(productDoc)
    } catch (error) {
        console.error(error)
    }
}
const GetProductByIdAndUpdate = async (req, res) => {
    const { like } = req.body
    const one = await Product.findByIdAndUpdate(req.params.id, { like: like })
    console.log(one, like);
    res.json(one)
}
module.exports = { GetAllProducts, GetProductById, GetProductByIdAndUpdate }