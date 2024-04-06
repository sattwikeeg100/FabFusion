const express = require('express');
const { createUser, loginUser, getAllUsers, getaUser, deleteaUser, updateaUser } = require("../controllers/userCtrl");
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/all-users', getAllUsers);
router.get('/:id', authMiddleware, getaUser);
router.delete('/:id', deleteaUser);
router.put('/:id', updateaUser);

module.exports = router;