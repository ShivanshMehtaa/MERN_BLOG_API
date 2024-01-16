import React, { useEffect, useState } from 'react'
import axios from 'axios';
const UserDetail = ({id}) => {

    const[user,setUser] = useState([])

    useEffect(() => {

        const fetchUser = async () => {
          const api = await axios.get(`https://mern-blog-api-ppkd.onrender.com/api/users/${id}`, {
            header:{
                "Content-Type":"application/json"
            },
            withCredentials: true,
          })
        //   console.log(api.data.user);
          setUser(api.data.user)
        }
    
        fetchUser();
    
    
      }, []);
  return (
    <div>
      <h5>{user.name}</h5>
      <h5>{user.email}</h5>
    </div>
  )
}

export default UserDetail
