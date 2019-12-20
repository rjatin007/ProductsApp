let products = require('../data/dataSource.json')
const filename = './data/dataSource.json'

function getProducts(page, size) {
    return new Promise((resolve, reject) => {
        if (products && products.products.length > 0) {
            if (page && size) {
                try {
                    let p = parseInt(page);
                    let s = parseInt(size);
                    let startIndex = (p - 1) * s;
                    let endIndex = (p * s);
                    let productsList = [];
                    productsList = products.products;
                    resolve({ 
                        status: 200, 
                        message: 'Success', 
                        totalCount: productsList.length,
                        data: productsList.slice(startIndex, endIndex) 
                    });
                } catch (e) {
                    console.log(e);
                    reject({
                        message: 'Invalid request parameters',
                        status: 400,
                        data: []
                    })
                }
            } else {
                resolve({ 
                    status: 200, 
                    message: 'Success', 
                    totalCount: products.products.length,
                    data: products.products 
                });
            }
        }
        else {
            reject({
                message: 'no products available',
                status: 202,
                data: []
            })
        }

    })
}



module.exports = {
    getProducts
}