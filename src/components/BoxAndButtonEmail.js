import React, { Component, } from 'react';
import SocialWidgets from './SocialWidgets.js';
import './styles/box-and-button-form.css';

import buttonIcon from '../images/section7-buttonIcon.png';
import browserImg from '../images/section6-browser.png';

class BoxAndButtonEmail extends Component {
  render() {
    return  (<form className="box-and-button-form">
              <div className="footer-flex-container">
                <input type="email" className="text-input-narrow round-border" placeholder="EMAIL" />
                <input type="image" src={buttonIcon} className="submit-image-paper-plane round-border" alt="newsletter subscribe" />
              </div>
              <SocialWidgets />
            </form>
  )};
}

export default BoxAndButtonEmail;
