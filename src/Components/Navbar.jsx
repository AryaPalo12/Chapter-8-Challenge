import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button';

const Navbar = (props) => {
  let isLoggedIn = props.login;
  const [username, setUser] = useState('User Testing');
  const navigate = useNavigate()
  const [cookies,removeCookie] = useCookies(['accessToken']);


  // const handleClick =()=> {
  //   console.log(removeCookie)
  //   removeCookie('accessToken',{path:'/'})
  //   navigate('/');
  // }

  return (
    <>
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
        <div className={"container-fluid"}>
          <a className={"navbar-brand"}>
            Your Blog
          </a>
          <button
            className={"navbar-toggler"}
            type="button"
          >
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div
            className={"collapse navbar-collapse"}
            id={"navbarSupportedContent"}
          >
            <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
              <li className={"nav-item home-button"}>
                  <Link to='/blogs' className={'no-decor'}>Home</Link>
              </li>
              <li className={"nav-item"}>
                  Contact
              </li>
              {isLoggedIn ? <>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className={'dropdown-margin'}>
                  Posts
                </Dropdown.Toggle>
                <Dropdown.Menu className={'bg-dark'}>
                  <Dropdown.Item className={'bg-dark'}><Link to='/blogs/new' className={'no-decor'}> Create </Link></Dropdown.Item>
                  <Dropdown.Item className={'bg-dark'}><Link to='blogs/dashboard' className={'no-decor'}>Dashboard</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></> : 
              <></>
              }
            </ul>
            <div className={"d-flex"}>
              { !isLoggedIn ?
              <>
                <Button color={'success'} name={'Log In'} linkButton link={'/login'}/>
                <Button color={'primary'} name={'Register'} linkButton link={'/register'}/>
              </>:
              <>
                <p className={'greeting'}>Hello, {username}</p>
                {/* <button className={'btn btn-outline-danger'} onClick={handleClick}>Log Out</button> */}
              </>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;