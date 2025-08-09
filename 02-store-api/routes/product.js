const express = require('express')
const router = express.Router()

const {getAllProducts,getAllProductsStatic} = require('../controllers/product')


// router.route('/').get((req,res)=>{
//     res.send('router working')
// })

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)


module.exports = router