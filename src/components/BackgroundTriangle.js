import React from 'react';
import image from '../images/decorationBox.png';

class BackgroundTriangle extends React.Component {
  render() {
    const style= {
      position: 'absolute',     //remember to give content pos : rel
      zIndex: -10,
      width: '100%',
      // top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px',
      overflow: "hidden"
    };

    const colourPrimary = this.props.colourPrimary || '#FF6D6D';

    return <svg  xmlns="http://www.w3.org/2000/svg" style={style} viewBox="0 0 1 1"
        data={this.props.transform+this.props.colourPrimary+this.props.colourSecondary}>
      <g transform={this.props.transform}>
        <path fill={colourPrimary} d="m0,0 l1,1 l-1,0 z" />
        {(this.props.colourSecondary === undefined) ?
          null
          : <path fill={this.props.colourSecondary} d="m0,0 l1,1 l0,-1 z" />}
      </g>
    </svg>
  }
}

export default BackgroundTriangle;
