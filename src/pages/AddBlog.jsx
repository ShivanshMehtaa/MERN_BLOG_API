import React, { useContext, useState } from 'react'
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import context from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';


const AddBlog = () => {

  const [title, setTitle] = useState("")
  const [description, setdescription] = useState("")
  const [imgUrl, setImgUrl] = useState("")

  const auth = useContext(context);
  const navigate = useNavigate();
  console.log(auth);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const api = await axios.post(`https://mern-blog-api-ppkd.onrender.com/api/blog/new`,
        {
          title,
          description,
          imgUrl,
        }, 
        {
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials: true,
        });

        // console.log(api.data.message);
        toast.success(api.data.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });

          auth.setIsAuthenticated(true);
          navigate('/profile')


    }catch(error){
      console.error(error);
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

        auth.setIsAuthenticated(false);
    }
  }

  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <div className="container" style={{width:'45%'}}>
      <h1 className='text-center p-5'>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input 
          value={title}
            onChange={(e)=>setTitle(e.target.value)}
            type="text" 
            className="form-control" 
            id="exampleText" 
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
          <input 
          value={description}
            onChange={(e)=>setdescription(e.target.value)}
            type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">ImageUrl</label>
          <input 
          value={imgUrl}
            onChange={(e)=>setImgUrl(e.target.value)}
            type="text" 
            className="form-control" 
            id="exampleInputPassword1"
          />
        </div>
        <div className='d-grid gap-2 my-5'>
          <button type="submit" className="gap-2 btn btn-primary">Add Blog</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default AddBlog
