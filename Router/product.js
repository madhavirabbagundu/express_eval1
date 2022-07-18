const express = require('express')
const productData = require('../database/product')
const { allproducts, postdata,updateData,deleteProduct } = require('../handlers/product')


const productRouter = express.Router()
productRouter.get('/products/all',allproducts)
productRouter.post('/products',postdata)
productRouter.patch('/products/:id',updateData)
productRouter.delete('/products/:id', deleteProduct)








module.exports=productRouter;