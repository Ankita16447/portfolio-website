import React from 'react';
import {Link} from "react-router-dom";
import {BsInstagram} from 'react-icons/bs';
import {ImLinkedin} from 'react-icons/im';
import {FaFacebookF} from 'react-icons/fa';


const Header = (props) => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" to="#"><b>{props.title}</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Education">Education</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Projects">Projects</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Skills">Skills</Link>
        </li>
      
      </ul>
     
        <Link to="https://instagram.com"><BsInstagram style={{width:"20px", height:"20px", color:"white", margin:"8px"}}></BsInstagram></Link>
        <Link to="https://www.linkedin.com/in/ankita-ankita-134795248"><ImLinkedin style={{width:"20px", height:"20px", color:"white", margin:"8px"}}></ImLinkedin></Link>
        <Link to="https://facebook.com"><FaFacebookF style={{width:"20px", height:"20px", color:"white", margin:"8px"}}></FaFacebookF></Link>


    </div>
  </div>
</nav>

  </div>
    
  )
}

export default Header
