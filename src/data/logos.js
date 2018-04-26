import React from 'react';
import logo1 from '../images/section5-logo1.png';
import logo2 from '../images/section5-logo2.png';
import logo3 from '../images/section5-logo3.png';
import logo4 from '../images/section5-logo4.png';
import logo5 from '../images/section5-logo5.png';

const imageWidth = '10.5vw';
const imageHeight = '80%';

export default ({imageWidth, imageHeight}) => [
  { image : <img src={logo1} alt="" className="logo" style={{maxWidth: imageWidth, height: imageHeight}}  /> },
  { image : <img src={logo2} alt="" className="logo" style={{width: imageWidth, height: imageHeight}}  /> },
  { image : <img src={logo3} alt="" className="logo" style={{width: imageWidth, height: imageHeight}}  /> },
  { image : <img src={logo4} alt="" className="logo" style={{width: imageWidth, height: imageHeight}}  /> },
  { image : <img src={logo5} alt="" className="logo" style={{width: imageWidth, height: imageHeight}}  /> }
]

// alt="" since screenreaders don't need to explain the logos!
