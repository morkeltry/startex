import React, { Component, } from 'react';
import './styles/single-line-grid.css';

class SingleLineGrid extends Component {
  render() {
    const receivedStyle = this.props.style || {};
    const receivedClasses = this.props.class || '';
    console.log (typeof receivedClasses, receivedClasses)

    return  (
      <div className={'single-line-grid ' + receivedClasses} style={{ alignItems : receivedStyle.align}}>
        {this.props.data.map (element => { return <span className="single-item"  style={{padding : receivedStyle.padding, alignSelf : receivedStyle.align}}>
          {element.image || null}
          <p>
            {element.title || null}
          </p>
          <p>
            {element.subtitle || null}
          </p>
          <p>
            {element.text || null}
          </p>
        </span>
      })}
      </div>
    )
  }
}

export default SingleLineGrid;
