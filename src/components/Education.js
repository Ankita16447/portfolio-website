import React from 'react';
import img1 from '../images/ccet_logo.png';
import img2 from '../images/logo37b.png';
import img3 from '../images/pseb_logo.png';


const Portfolio = () => {
  return (
    <div style={{marginTop:"70px"}}>
      <h1 style={{textAlign:"center"}}>EDUCATION</h1>
    <div className="container-fluid flex row" style={{justifyContent:"space-evenly"}}>
            <div className="card" style={{width: "18rem", marginBottom:"20px"}}>
            <img src={img1} className="card-img-top" alt="" style={{height:"14rem"}}/>
                  <div className="card-body">
                    <h5 className="card-title">CCET Sec-26 Chd</h5>
                    <p className="card-text">B.E. CSE 4th year</p>
                    <p className="card-text">Batch : 2020 - 2024</p>
                    <p className="card-text">CGPA : 9.1 </p>

                    {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
                  </div>
          </div>

          <div className="card" style={{width: "18rem", marginBottom:"20px"}}>
            <img src={img2} className="card-img-top" alt="" style={{height:"14rem", width:"12rem", marginTop:"6px", marginLeft:"26px"}} />
                  <div className="card-body">
                    <h5 className="card-title">GMSSS 37-B chd</h5>
                    <p className="card-text">year : 2019 - 2020</p>
                    <p className="card-text">percent : 84.8</p>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
                  </div>
          </div>

          <div className="card" style={{width: "18rem", marginBottom:"20px"}}>
            <img src={img3} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Vikram public High School Kharar Mohali</h5>
                    <p className="card-text">year : 2017 - 2018</p>
                    <p className="card-text">percent : 92.6</p>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
                  </div>
          </div>
    </div>
    </div>
  )
}

export default Portfolio
