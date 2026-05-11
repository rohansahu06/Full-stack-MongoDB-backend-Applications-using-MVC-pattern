const express = require('express');
const router = express.Router();
const User = require('../models/productmodel');
const {getproducts, updateproduct, createproduct, deleteproduct } = require('../Controler/productcontrol')

router.get('/product', getproducts)

router.put('/product/:id', updateproduct  )

router.post('/product', createproduct )

router.delete('/product/:id', deleteproduct  )


module.exports = router;

// This method follows MVC pattern    
