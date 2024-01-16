import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserDetail from '../components/UserDetail';

const Home = () => {

  const [blog, setBlog] = useState([]);

  useEffect(() => {

    const fetchBlog = async () => {
      const api = await axios.get(`https://mern-blog-api-ppkd.onrender.com/api/blog/allblogs`, {
        withCredentials: true,
      })
      // console.log(api.data.blogs);
      setBlog(api.data.blogs)
    }

    fetchBlog();


  }, []);

  return (
    <>
      <div className="container text-center p-5" style={{ width: '60%' }}>

        {blog.map((data) => {
          return (
            <>
              <div className="card mb-3" style={{ maxWidth: '800px' }}>
                <div className="row g-0">
                  <div className="col-md-4" style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                  }}>
                    <img src={data.imgUrl} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">{data.title}</h2>
                      <p className="card-text">{data.description}</p>
                      <p className="card-text"><small className="text-body-secondary">{data.createdAt}</small></p>
                      <UserDetail id={data.user}/>
                    </div>
                  </div>
                </div>
              </div>

            </>
          )
        })}



      </div>
    </>
  )
}

export default Home
