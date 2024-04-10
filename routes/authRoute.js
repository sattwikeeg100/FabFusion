const express = require('express');
const { createUser, 
    loginUser, 
    getAllUsers, 
    getaUser, 
    deleteaUser, 
    updateaUser, 
    blockUser, 
    unblockUser, 
    handleRefreshToken, 
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus,
    getAllOrders
} = require("../controllers/userCtrl");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);
router.put('/password', authMiddleware, updatePassword);
router.post('/login', loginUser);
router.post('/admin-login', loginAdmin);
router.post('/cart', authMiddleware, userCart);
router.post('/cart/applycoupon', authMiddleware, applyCoupon);
router.post('/cart/cash-order', authMiddleware, createOrder);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.get("/get-orders", authMiddleware, getOrders);
router.get('/all-users', getAllUsers);

router.put('/edit-user', authMiddleware, updateaUser);
router.put('/save-address', authMiddleware, saveAddress);
router.delete('/empty-cart', authMiddleware, emptyCart);
router.delete('/:id', deleteaUser);
// admin routes
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.put('/order/update-order/:id', authMiddleware, isAdmin, updateOrderStatus);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);

module.exports = router;