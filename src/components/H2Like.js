import React, { Component, } from 'react';
import './styles/h2-like.css'

class H2Like extends Component {
  render() {
    return (
      <div style={{textAlign : this.props.style.align}}>
        <div className="h2-like-pinks h2-like-small" >{this.props.style.pinkBefore}
        </div>
          <span className="h2-like-main-color h2-like-big">{this.props.content} </span>
          <span className="h2-like-pinks h2-like-big">{this.props.style.pinkAfter} </span>
      </div>
    )
  }
}

export default H2Like;
