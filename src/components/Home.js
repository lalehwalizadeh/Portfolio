import Capture from '../Images/Capture.jpg';
import './Home.css';
import './botton.css';
import React from 'react';

export default function Home() {
  return (
    
      <div className='design'>

        <div className="side">
          <div className="pic "><img src={Capture} alt="my_picture" className='img' /></div>
          <div className="intro">
            <h1>Ms.Laleh Walizadeh </h1>
            <h6>Frontend Web Developer</h6>
            <br />
            <span>

              <a href='/about'className='btn_design '> More About Me</a>
              <a href='/works'className='btn_design '> Portfolio </a>

            </span>
          </div>
        </div>

      </div>
   

  );
}



























