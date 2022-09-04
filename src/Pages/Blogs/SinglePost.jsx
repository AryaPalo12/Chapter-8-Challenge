import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import def_img from '../../Images/def_img.png'
import axios from 'axios';

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({}); // this make the post act as dictionary
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/v1/user/posts/single/${postId}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  },[]);

  return (
    <>
      <div className={'single-page'}>
        <center>
        <div className={'single-title'}>{post.title}</div>
        {post.imageUrl !== undefined ?<img src={`${post.imageUrl}`}></img>:<img src={def_img}></img>}
        </center>
        <div className={'article'}>{post.body}</div>
        <div>
          <button className={'bg-dark btn btn-outline-danger margin-single'}
            onClick={() => {
              navigate(-1);
            }}
          > Previous Page</button>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
