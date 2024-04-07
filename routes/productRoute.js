const express = require('express');
const { createProduct, 
    getaProduct, 
    getAllProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/productCtrl');
const router = express.Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getaProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;