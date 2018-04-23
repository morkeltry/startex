import React, { Component, } from 'react';

class SingleLineGrid extends Component {
  render() {
    return  (
      <div className="single-line-grid">
        {this.props.data.map (element => { return <span>
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
