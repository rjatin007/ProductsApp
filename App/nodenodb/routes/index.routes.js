const express = require('express')
const router = express.Router()

router.use('/api/products', require('./product.routes'))



module.exports = router