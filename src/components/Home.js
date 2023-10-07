import React from 'react'
import img1 from '../images/image.jpg';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div style={{marginTop:"80px"}}>
      <div className="container">
            <div className="row" style={{backgroundColor:"#212529"}}>
                
                <div className="col-lg-6" >
                    <div className="card" style={{display:"block", margin:"auto", width:"600px" , backgroundColor:"#212529",color:"white", border:"none"}}>
                        <div className="card-body" >
                          <h5 className="card-title">I'm</h5>
                          <h1 className="card-title">ANKITA</h1>
                          <p className="card-text">Web Developer</p>
                          <p className="card-text" style={{wordBreak:"break-word"}}>
                            Solution driven web developer adapt at contributing highly collaborative work 
                            environment and finidng solutions. Proven experience developing consumer-focused 
                            websites by using HTML, CSS and Javascript.Good knowledge of best practices for web 
                            design, user experience and speed.
                    </p>
                          <Link to="/Contact" style={{color:"#212529"}} className="btn btn-light">Contact</Link>
                        </div>
                    </div>
                 
                     <br />
                </div>

                <div className="image col-lg-6" style={{width:"30rem", display:"block", margin:"auto" }}>
                      <img src={img1} alt="" style={{height:"300px", width:"60%", borderRadius:"50%", marginTop:"8px",marginLeft:"60px"}}  />
                </div>
            </div>
      </div>
      <br />
</div>


  )
}

export default Home;



