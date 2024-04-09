const express = require('express');
const { createProduct, 
    getaProduct, 
    getAllProducts,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating
} = require('../controllers/productCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);
router.get('/', getAllProducts);
router.get('/:id', authMiddleware, isAdmin, getaProduct);
router.put('/:id', authMiddleware, isAdmin, updateProduct);
router.delete('/:id', authMiddleware, isAdmin, deleteProduct);

module.exports = router;