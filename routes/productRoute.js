const express = require('express');
const { createProduct, getaProduct, getAllProducts } = require('../controllers/productCtrl');
const router = express.Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getaProduct);

module.exports = router;