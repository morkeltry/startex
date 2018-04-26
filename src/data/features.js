import React from 'react';
import feature1 from '../images/section3-icon1.png';
import feature2 from '../images/section3-icon2.png';
import feature3 from '../images/section3-icon3.png';

export default [
  {
    image :
      <img src={feature1} alt={'letters'} className="logo" style={{width : "30%"}}/>,
    title :
      'Some  features',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut.'
  },
  {
    image :
      <img src={feature2} alt={'planes'} className="logo"  style={{width : "30%"}}/>,
    title :
      'Some  features',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo ullamcorper.'
  },
  {
    image :
      <img src={feature3} alt={'electricity'} className="logo"  style={{width : "30%"}}/>,
    title :
      'Some  features',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.'
  }
]
