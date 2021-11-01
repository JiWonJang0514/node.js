// localhost:3000/admin

const express = require('express')
const router = express.Router()

// localhost:3000/admin
router.get('/', (req, res) => {
    res.send('admin 이후 url')
})

// localhost:3000/admin/products
router.get('/products', (reg, res) => {
    //res.send('admin products!!')
    res.render('admin/products.html')
})

// localhost:3000/admin/write
router.get('/write', (req, res) => {
    res.render('admin/write.html')
})

router.post('/write', (req, res) => {
    res.send(req.body) //바디 파서가 여기서 쓰인다!
    //ex) res.send(req.body.name) 이런식으로 가져올 수 있음

    
})

module.exports = router