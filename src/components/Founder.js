import React, { Component, } from 'react';

class Founder extends Component {
  render() {
    return  (
      <div>
        {this.props.founder.image}
        <p>
        {this.props.founder.name}
        </p>
        <p>
        {this.props.founder.title}
        </p>
        <p>
        {this.props.founder.blurb}
        </p>        
      </div>
    )
  }
}

export default Founder;
