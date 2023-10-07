import React from 'react';
import img1 from '../images/html.png';
import img2 from '../images/css.png';
import img3 from '../images/js.png';
import img4 from '../images/git.png';
import img5 from '../images/github.png';
import img6 from '../images/nodejs.png';
import img7 from '../images/reactjs.png';
import img8 from '../images/mongodb.png';

const Skills = () => 
{
  return (
    <div style={{marginTop:"80px"}}>
        <h1 style={{textAlign:"center"}}>What I do</h1>

      <div className="container" style={{border:"2px solid black"}}>
        {/* <h1 style={{textAlign:"center"}}>What I do</h1> */}
        <div className="row" style={{height:"50%"}}>
            <div className="col-lg-3"><img src={img1} alt="" style={{height:"220px", width:"300px"}}/></div>
            <div className="col-lg-3"><img src={img2} alt="" style={{height:"220px", width:"300px"}}/></div>
            <div className="col-lg-3"><img src={img3} alt="" style={{height:"200px", width:"270px"}}/></div>
            <div className="col-lg-3"><img src={img4} alt="" style={{height:"220px", width:"250px"}}/></div>
        </div>

        <div className="row" style={{height:"50%"}}>
            <div className="col-lg-3"><img src={img5} alt="" style={{height:"220px", width:"230px", marginLeft:"30px"}}/></div>
            <div className="col-lg-3"><img src={img6} alt="" style={{height:"220px", width:"250px",marginLeft:"30px"}}/></div>
            <div className="col-lg-3"><img src={img7} alt="" style={{height:"220px", width:"260px",marginLeft:"30px"}}/></div>
            <div className="col-lg-3"><img src={img8} alt="" style={{height:"220px", width:"200px",marginLeft:"30px"}}/></div>
        </div>



      </div>
    </div>
  )
}

export default Skills;
