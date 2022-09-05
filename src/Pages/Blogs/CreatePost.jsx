import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const CreatePost = () => {
  const cookies = useCookies(["accessToken"]);
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/v1/user/posts", values, {
        headers: { Authorization: `Bearer ${cookies[0].accessToken}` },
      })
      .then((res) => navigate("/blogs"))
      .catch((err) => console.log(err, "Something goes wrong"));
  };

  return (
    <>
      <div className={"blog-background"}>
        <center>
          <form className={"blog-form"} onSubmit={handleSubmit}>
            <div>
              <label>Title</label>
            </div>
            <div>
              <input
                name={"title"}
                onChange={handleChange}
                placeholder={"Title"}
              />
            </div>
            <div>
              <label>Image Url</label>
            </div>
            <div>
              <input
                name={"imageUrl"}
                onChange={handleChange}
                placeholder={"Image Url"}
              />
            </div>
            <div>
              <label>Body</label>
            </div>
            <div>
              <textarea
                className={"blog-form-body"}
                name={"body"}
                onChange={handleChange}
                placeholder={"Your text here...."}
              />
            </div>
            <div>
              <button className={"btn btn-success w-80"} type={"submit"}>
                Post
              </button>
            </div>
          </form>
        </center>
      </div>
    </>
  );
};

export default CreatePost;
