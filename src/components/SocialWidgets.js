import React, { Component, } from 'react';
import SingleLineGrid from './SingleLineGrid.js';
import social from '../data/social.js';
import './styles/social-widgets.css';

class SocialWidgets extends Component {
  render() {
    return  ( <div>
      <SingleLineGrid data={social ({imageHeight: '15px'}) } class='social-widgets'/>
    </div> )
  }
}

export default SocialWidgets;
