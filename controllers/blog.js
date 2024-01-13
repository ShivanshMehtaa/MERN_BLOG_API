import { Blog } from "../Models/blogs.js";

export const createBlog = async(req,res)=>{
    const {title,description,imgUrl} = req.body;
    const blog = await Blog.create({
        title, 
        description, 
        imgUrl,
        user:req.user
    })

    res.status(201).json({
        success:true,
        message:"Blog Created Successfully",
        blog
    })
}
export const myBlog = async(req,res)=>{
    const userid = req.user._id

    const blogs = await Blog.find({
        user:userid,
    })
    res.status(200).json({
        success:true,
        blogs
    })
}
export const updateBlog = async(req,res)=>{
    const {title, description, imgUrl} = req.body;

    const id= req.params.id;

    const blog = await Blog.findById(id) 

    if(!blog) return res.status(404).json({
        success:false,
        message:"Could Not Find Blog"
    })

    blog.title = title
    blog.description = description
    blog.imgUrl = imgUrl

    blog.save()

    res.json({
        success:true,
        message:"Updating blog... ",
        blog
    })
}
export const deleteBlog = async(req,res)=>{
    const id= req.params.id;

    const blog = await Blog.findById(id) 

    if(!blog) return res.status(404).json({
        success:false,
        message:"Could Not Find Blog"
    })

    await Blog.deleteOne();

    res.json({
        success:true,
        message:"Deleting Blog..."
    })
}

export const getAllBlogs = async(req,res)=>{

    const blogs = await Blog.find(); 

    if(!blogs) return res.status(404).json({
        success:false,
        message:"No Blog Exists"
    })

    res.json({
        success:true,
        message:"All Blogs ",
        blogs
    })
}

export const getBlogById = async(req,res)=>{
    const id= req.params.id;

    const blog = await Blog.findById(id) 

    if(!blog) return res.status(404).json({
        success:false,
        message:"Invalid ID"
    })


    res.json({
        success:true,
        message:"Requested Blog",
        blog
    })
}

