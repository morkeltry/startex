import React, { Component, } from 'react';
import SingleLineGrid from './SingleLineGrid.js';
import social from '../data/social.js';
import './styles/social-widgets.css';

class SocialWidgets extends Component {
  render() {
    return  ( <div className="social-widgets" >
      <SingleLineGrid className="social-widgets" data={social} style={{padding: 0}}/>
    </div> )
  }
}

export default SocialWidgets;
