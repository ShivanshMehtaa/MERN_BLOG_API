import React, { useContext, useEffect } from 'react'
import context from '../context/AuthContext';
import axios from 'axios';

const Profile = () => {


  useEffect(() => {

    const fetchUser = async () => {
      const api = await axios.get(`https://mern-blog-api-ppkd.onrender.com/api/users/myprofile`, {
          headers:{
            "Content-Type":"application/json"
          },
        withCredentials: true,
      })
      console.log(api);
      // setBlog(api.data.blogs)
    }

    fetchUser();


  }, []);

  return (
    <div>
      Profile
    </div>
  )
}

export default Profile
