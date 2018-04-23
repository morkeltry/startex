import React, { Component, } from 'react';

class RowItem extends Component {
  render() {
    return  (
      <span>
      {this.props.data.map (element => { 
        // {element.image || null}
        <p>
        {element.title || null}
        </p>
        <p>
        {element.subtitle || null}
        </p>
        <p>
        {element.text || null}
        </p>
      )}
      </span>
    )
  }
}

export default RowItem;
