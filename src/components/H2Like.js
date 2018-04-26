import React, { Component, } from 'react';
import './styles/h2-like.css'

class H2Like extends Component {
  render() {
    const receivedStyle = this.props.style || {};

    return (
      <div style={{textAlign : receivedStyle.align}}>
        <div className="h2-like-pinks h2-like-small" >{receivedStyle.pinkBefore}</div>
        <span className="h2-like-main-color h2-like-big">{this.props.content} </span>
        <span className="h2-like-pinks h2-like-big">{receivedStyle.pinkAfter} </span>
      </div>
    )
  }
}

export default H2Like;
