import React from 'react';
import { Link } from 'react-router-dom';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    // <div >
        // <div className="container-fluid col-lg-12" style={{backgroundColor:"#212529"}}>
          <div className="container-fluid" style={{display:"flex", flexDirection:"row", marginTop:"5px", padding:"15px",backgroundColor:"#212529"}}>
            <div className="row">
                      <div className="col-lg-6">
                        <h5 style={{color:"white"}}>ANKITA</h5>
                        <p style={{color:"white", wordBreak:"break-word",fontSize:"15px"}}>Self-independent, reliable and firendly individual who works hard
                          to achieve her goals. Adaptable quickly and oragnized well, interested in learning the latest web and software 
                          technologies quickly. Able to work in teams as well as individually . My future goal is to 
                          become a senior full-stack developer.</p>
                      </div>
                      <div className="col-lg-3" style={{display:"flex", flexDirection:"column", color:"white"}}>
                        <h5 style={{textAlign:"left", marginLeft:"15px"}}>EXPLORE</h5>
                        <ul>
                          <li style={{listStyleType:"none"}}><Link style={{color:"white", textDecoration:"none"}} to="/">Home</Link></li>
                          <li style={{listStyleType:"none"}}><Link style={{color:"white", textDecoration:"none"}} to="/about">About</Link></li>
                          <li style={{listStyleType:"none"}}><Link style={{color:"white", textDecoration:"none"}} to="/Projects">Projects</Link></li>
                          <li style={{listStyleType:"none"}}><Link style={{color:"white", textDecoration:"none"}} to="/Portfolio">Skills</Link></li>
                          <li style={{listStyleType:"none"}}><Link style={{color:"white", textDecoration:"none"}} to="/Contact">Contact</Link></li>
                        </ul>
                      </div>

                     
                      <div className="col-lg-3">
                        <h5 style={{color:"white"}}>Contact me</h5>
                        <br />
                        <input style={{padding:"5px", width:"90%",borderRadius:"5px",border:"2px solid white"}} type="email" id="email" name="email" placeholder="email address"></input>
                      </div>
                    </div>

          

        </div>
    // </div>
  )
}

export default Footer
