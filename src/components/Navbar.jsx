import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import context from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Navbar = () => {

  const auth = useContext(context);
  const navigate = useNavigate();

  const logOut = async () => {
    const api = await axios.get(`https://mern-2023-api-youtube.onrender.com/api/users/logout`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      });

    // console.log(api);
    toast.success(api.data.message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    auth.setIsAuthenticated(false);

    setTimeout(() => {
      navigate('/')
    }, 1500);

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
      <div className='navbar'>
        <Link to={'/'} className='left'>
          <h2>XBlog</h2>
        </Link>
        <div className='right'>
          <Link to={'/login'} className="items">
            <h3>Login</h3>
          </Link>
          <Link to={'/register'} className="items">
            <h3>Register</h3>
          </Link>
          <Link to={'/addBlog'} className="items">
            <h3>AddBlog</h3>
          </Link>
          <Link to={'/Profile'} className="items">
            <h3>Profile</h3>
          </Link>
          <div onClick={logOut} className='items'>
            <h3>Logout</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
