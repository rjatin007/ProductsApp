const express = require('express')
const router = express.Router()
const product = require('../models/product.model')


/* All products */
router.get('/', async (req, res) => {
    const page = req.query.page;
    const size = req.query.size;
    await product.getProducts(page, size)
    .then(products => res.json(products))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})


module.exports = router