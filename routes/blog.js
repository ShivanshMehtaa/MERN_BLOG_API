import express from 'express'
import { isAuthenticated } from '../middlewares/auth.js';
import { getBlogById,getAllBlogs,createBlog,myBlog, updateBlog, deleteBlog } from '../controllers/blog.js';

const router = express.Router();

router.get('/allblogs',getAllBlogs)

router.get('/blog/:id',isAuthenticated, getBlogById)

router.post('/new',isAuthenticated, createBlog);

router.get('/myblogs',isAuthenticated, myBlog);

router.put('/:id',isAuthenticated, updateBlog);

router.delete('/:id',isAuthenticated, deleteBlog);


export default router;