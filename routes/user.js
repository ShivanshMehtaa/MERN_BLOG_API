import express from 'express'
import { getUserById,getMyProfile, userHome, userLogin, userLogout, userRegister, } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', userHome);

router.get('/:id',getUserById)

router.post('/register', userRegister);

router.post('/login', userLogin);

router.get('/logout', userLogout);

router.get('/myprofile',isAuthenticated, getMyProfile);

export default router;