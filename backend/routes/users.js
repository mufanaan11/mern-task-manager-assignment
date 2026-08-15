

import express from 'express'

const router = express.Router();

import { getUsers, getUserInfo, createUser, updateUser, deleteUser } from '../controllers/users.js'
import { protect } from '../middlewares/auth.js'



router.get('/', protect, getUsers);
router.get('/:id', protect, getUserInfo);
router.post('/create', protect, createUser);
router.put('/update/:id', protect, updateUser);
router.delete('/delete/:id', protect, deleteUser)

// export the router
export default router;