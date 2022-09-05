import { Route, Routes } from "react-router-dom";
import AppLayout from "./Layout";
import Blogs from "./Pages/Blogs/Blogs";
import CreatePost from "./Pages/Blogs/CreatePost";
import Dashboard from "./Pages/Blogs/Dashboard";
import EditPost from "./Pages/Blogs/EditPost";
import FrontPage from "./Pages/Blogs/FrontPage";
import SinglePost from "./Pages/Blogs/SinglePost";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const App2 = (props) => {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/dashboard" element={<Dashboard />} />
          <Route path="/blogs/:postId/" element={<SinglePost />} />
          <Route path="/blogs/new" element={<CreatePost />} />
          <Route path="/blogs/edit/:postId" element={<EditPost />} />
        </Routes>
      </AppLayout>
    </>
  );
};

export default App2;
