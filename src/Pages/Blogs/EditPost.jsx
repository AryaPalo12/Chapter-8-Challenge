import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const EditPost = () => {
  const { postId } = useParams();
  const cookies = useCookies(['accessToken']);
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/v1/user/posts/single/${postId}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  },[]);

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .put(`http://localhost:8000/v1/user/posts/${post.id}`, post,{ headers: { Authorization : `Bearer ${cookies[0].accessToken}`}})
    .then((res) => navigate('/blogs/dashboard'))
    .catch((err) => console.log('Something goes wrong'));
}

  return (
    <>
      <div>
        <center className={'blog-background'}>
        <form className={'blog-form'} onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
          </div>
          <div>
            <input name={"title"} value={post.title} onChange={handleChange} />
          </div>
          <div>
            <label>Image Url</label>
          </div>
          <div>
            <input name={'imageUrl'} value={post.imageUrl} onChange={handleChange} />
          </div>
          <div>
            <label>Body</label>
          </div>
          <div>
            <textarea className={'blog-form-body'} name={"body"} value={post.body} onChange={handleChange} />
          </div>
          <div>
            <button className={'btn btn-warning w-80-2'} type={"submit"}>Save</button>
          </div>
          <div>
          <button className={'btn btn-danger w-80-2'}
            onClick={() => {
              navigate(`/blogs/dashboard`);
            }}
          >
            Cancel
          </button>
        </div>
        </form>
        </center>
      </div>
    </>
  );
};

export default EditPost;
