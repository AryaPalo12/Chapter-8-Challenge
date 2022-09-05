import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <>
      <div className={"container-fluid text-center leaf"}>
        <div className={"row"}>
          <div className={"col-md-4 text-warning left"}>
            <h1 className={"fs-1"}>Simple Blog Page</h1>
            <p>By : Arya Sena Aji</p>
          </div>
          <div className={"col-md-8 text-white right"}>
            <h2 className={"fs-1"}>Already have an account ?</h2>
            <Link to={"/login"}>Login</Link>
            <br />
            <h2 className={"fs-1"}>Dont have an account, just register...</h2>
            <Link to={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
