import React from 'react';
// import './Home.css';
import {Link} from "react-router-dom"
import bg from './images/nature.jpg';
import TravelSurvey from "./ModeChoice"

function Home() {
  // return (
  //   <div className="homepage">
  //     <div className="bg-section">
  //       <img src={bg} alt="Hero Image" className="bg-image" />
  //       <div className="bg-content">
          
  //         <h1>Respondent Travel profile</h1>
  //         <p>Thanks for visiting my site! I hope you find what you're looking for.</p>
  //         <a href="/about">Learn more about me</a><br></br>
  //         <Link   to="/mode-choice" >Go to choose Mode</Link>
  //       </div>
  //     </div>
  //   </div>
  // );
  return <TravelSurvey/>
}

export default Home;
