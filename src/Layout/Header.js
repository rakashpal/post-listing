

import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import {  useSelector } from "react-redux";
const Header=({ props })=>{
    const is_login = useSelector(state => state.auth.is_login);
  
   
    return (
     <>
{(is_login
            ?  <ul>
            <li className="display-inline">
            <Link className="btn btn-primary" to="/Dashboard">Dashboard</Link>
            </li>
            <li className="display-inline">
            {/* <Link className="btn btn-primary" to="/logout">Logout</Link> */}

            </li></ul>
            :<ul>
            <li className="display-inline">
            <Link className="btn btn-primary" to="/">Login</Link>
            </li></ul>)}
     </>
    );
}

  
  export default Header;
