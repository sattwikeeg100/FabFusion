const express = require('express');
const { createUser, loginUser, getAllUsers, getaUser, deleteaUser, updateaUser, blockUser, unblockUser } = require("../controllers/userCtrl");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/all-users', getAllUsers);
router.delete('/:id', deleteaUser);
router.put('/edit-user', authMiddleware, updateaUser);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.put('/block-user/:id', blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);

module.exports = router;