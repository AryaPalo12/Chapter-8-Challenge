import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({});

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //this will call the the api here
    axios
      .post("http://localhost:8000/v1/user/register", newUser)
      .then(navigate("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <>
    <div className={'registration'}>
      <div className={"register-page"}>
        <div className={'register-form'}>
          <form className ={'register-box'} onSubmit={handleSubmit}>
            <center>
            <div className={'register-margin'}>
              <label>Username</label>
            <div>
            <input onChange={handleChange} name={"fullname"} />
            </div>
            </div>
            <div>
              <label>Email</label>
            <div>
              <input onChange={handleChange} name={"email"} placeholder={'something@somewhere.com'}/>
            </div>
            </div>
            <div>
              <label>Password</label>
            <div>
            <input
                onChange={handleChange}
                name={"password"}
                type={"password"}
                placeholder={'ex: Password@123'}
              />
            <br />
            <p className={'small-text'}>Please input password with alphanumeric and symbol format</p>
            </div>
            </div>
            </center>
            <div>
                <center>
                <button type={"submit"} className={'btn btn-success w-80'}>Create New User</button>
                </center>
              </div>
          </form>
        </div>
        <div className={'register-text'}>
          <h3>
            Welcome guest, to our Blog Website we provide easy registration,
            just one step before you can use all our blog feature.
          </h3>
          <h4>Blogs promotion here.......</h4>
          <h5>Any small text here too</h5>
        </div>
      </div>
      </div>
    </>
  );
};

export default Register;
