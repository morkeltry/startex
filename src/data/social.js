import React from 'react';
import logo1 from '../images/section7-logo1.png';
import logo2 from '../images/section7-logo2.png';
import logo3 from '../images/section7-logo3.png';
import logo4 from '../images/section7-logo4.png';

export default ({imageWidth, imageHeight}) => [
  { image : <img src={logo1} alt="some ball thing" className="logo" style={{width: imageWidth, height: imageHeight}} /> },
  { image : <img src={logo2} alt="fb" className="logo"  style={{width: imageWidth, height: imageHeight}}/> },
  { image : <img src={logo3} alt="g+" className="logo"  style={{width: imageWidth, height: imageHeight}}/> },
  { image : <img src={logo4} alt="tweet" className="logo"  style={{width: imageWidth, height: imageHeight}}/> }
]
