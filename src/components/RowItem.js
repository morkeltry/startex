import React, { Component, } from 'react';

class RowItem extends Component {
  render() {
    return  (
      <div>
        {this.props.data.image || null}
        <p>
        {this.props.data.title || null}
        </p>
        <p>
        {this.props.data.subtitle || null}
        </p>
        <p>
        {this.props.data.text || null}
        </p>
      </div>
    )
  }
}

export default RowItem;
