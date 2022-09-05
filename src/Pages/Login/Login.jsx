import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({});
  const [cookies, setCookies] = useCookies(["accessToken", "email"]);

  const handleChange = (event) => {
    setCredential({ ...credential, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //this will call the the api here
    axios
      .post("http://localhost:8000/v1/auth/login", credential)
      .then((res) => {
        const { accessToken } = res.data;
        if (accessToken !== undefined) {
          setCookies("accessToken", accessToken, { maxAge: 3600 });
          navigate("/blogs/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={"form-bg"}>
        <center>
          <h1 className={"blog-heading"}>This Blog</h1>
        </center>
        <div className={"form-div"}>
          <form onSubmit={handleSubmit}>
            <div className={"form-spacing"}>
              <center>
                <h1>Login</h1>
              </center>
            </div>
            <div className={"form-spacing"}>
              <label>Email</label>
              <div>
                <input
                  onChange={handleChange}
                  name={"email"}
                  placeholder={"youremail@mail.com"}
                />
              </div>
            </div>
            <div className={"form-spacing"}>
              <label>Password</label>
              <div>
                <input
                  onChange={handleChange}
                  name={"password"}
                  type={"password"}
                  placeholder={"pasword here"}
                />
              </div>
            </div>
            <div>
              <button className={"btn btn-primary w-85"} type={"submit"}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
