import React from 'react';
import image from '../images/decorationBox.png';

// const transform= 'rotate(180deg)';

class BackgroundImage extends React.Component {
  render() {
    const style = {
      position: 'absolute',     //remember to give content pos : rel
      zIndex: -10,
      height: '250%',
       bottom: '-100vw',
       left : '0vw',
       overflow: "hidden",
      transform: this.props.transform
    };

    return <div style={style}>
      <img src={image} style={{width: '100%', objectFit: 'contain', overflow:"hidden"}} alt="" className="logo" />
    </div>
  }
}

export default BackgroundImage;
