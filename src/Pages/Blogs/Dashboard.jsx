import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Cards from '../../Components/Cards';

const Dashboard = () => {
    const [cookies] = useCookies(['accessToken']);
    const navigate = useNavigate();
    const [posts,setPost] = useState([]);
    const userData = jwtDecode(cookies.accessToken);

    const fetchPost = () =>{
        axios
        .get(`http://localhost:8000/v1/user/posts/${userData.id}`)
        .then((res)=>{setPost(res.data);})
        .catch((err)=>console.log(err));
    };

    const handleClick = (id) => {
        navigate(`/blogs/${id}`);
      };

    useEffect(() => {
        if(!cookies.accessToken) {
            navigate("/blogs");
        }
        else{
            fetchPost();
        }
    },[])

    return(
    <>
    <div className="wrapper">
        <center>
          <div className={"blogTitle"}>
            <h1>Blog Post Article</h1>
            <p>Placeholder text to explain something here</p>
          </div>
        </center>
        {posts.length !== 0 ?
        <>
        <div className={"gridDisplay"}>
          {posts.map((post) => (
            <Cards editEnabled={ true } key={post.id} title={post.title} body={post.body} link={post.id} onClick={()=>handleClick(post.id)}/>
          ))}
        </div>
        </> : <>
        <div className={"blogTitle-full"}>
          <center>
          <h1 >No post here</h1>
          </center>
        </div>
        </>

        }

      </div>
    </>
    );
}; 

export default Dashboard;