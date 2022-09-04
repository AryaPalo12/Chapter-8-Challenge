import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../../Components/Cards";

const Blogs = () => {
    const [posts, setPost] = useState([]);
    const navigate = useNavigate();

    const fetchPost = () => {
      axios
      .get('http://localhost:8000/v1/user/posts/')
      .then((res)=>{setPost(res.data);})
      .catch((err)=> console.log(err));
    }

    const handleClick = (id) => {
      navigate(`/blogs/${id}`);
    };

    useEffect(()=> {
      fetchPost();
    }, []);

    return(
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
                  <Cards key={post.id} title={post.title} body={post.body} onClick={()=>handleClick(post.id)}/>
                ))}
          </div>
        </>:<>
        <div className={"blogTitle-full"}>
          <center>
          <h1 >No post here</h1>
          </center>
        </div>
        </>
        }

      </div>
    )
}

export default Blogs;