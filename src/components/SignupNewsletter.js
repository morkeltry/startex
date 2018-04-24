import React, { Component, } from 'react';
import BoxAndButtonEmail from './BoxAndButtonEmail.js';

class SignupNewsletter extends Component {
  render() {
    return  (
      <div>
        <h5>
          Get Newsletter
        </h5>
        <BoxAndButtonEmail />
        <div id="social-buttons">
        </div>
      </div>
    )
  }
}

export default SignupNewsletter;
