const express = require('express');
const { createUser, loginUser, getAllUsers, getaUser, deleteaUser, updateaUser } = require("../controllers/userCtrl");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/all-users', getAllUsers);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.delete('/:id', deleteaUser);
router.put('/edit-user', authMiddleware, updateaUser);

module.exports = router;