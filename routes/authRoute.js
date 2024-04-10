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
    loginAdmin
} = require("../controllers/userCtrl");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);
router.post('/password', authMiddleware, updatePassword);
router.post('/login', loginUser);
router.post('/admin-login', loginAdmin);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get('/all-users', getAllUsers);
router.put('/edit-user', authMiddleware, updateaUser);
router.delete('/:id', deleteaUser);
// admin routes
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);

module.exports = router;