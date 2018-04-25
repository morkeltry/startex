import React, { Component, } from 'react';
import './styles/single-line-grid.css';

class SingleLineGrid extends Component {
  render() {
    return  (
      <div className="single-line-grid">
        {this.props.data.map (element => { return <span className="single-item">
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
