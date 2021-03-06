import React, { Component } from 'react';
import TegaLogo from "../../../static/assets/images/Bottega-green.png"
import EQLogo from "../../../static/assets/images/equity-white.png"

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='header-body'>
        <div className="first-logo">
          <img src={EQLogo} alt="equity"/>
          <h1><b>Series E</b></h1>
        </div>

        <div  className="bottega-logo" >
          <a href="https://bottega.tech/" target="_blank">
            <img src={TegaLogo} alt="bottega"/>
          </a>
        
          <div className="typewriter">
            <h1>Perpetual Endowment Fund</h1>
          </div>

        </div>
      </div>
    );
  }
}