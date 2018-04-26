import React, { Component, } from 'react';
import './styles/single-line-grid.css';

class SingleLineGrid extends Component {
  render() {
    const receivedItemStyle = this.props.style || {};
    const receivedTextColours = this.props.textColours || {};
    const receivedTextStyle = this.props.textStyle || {};
    const receivedClasses = this.props.class || '';

    return  (
      <div className={'single-line-grid ' + receivedClasses} style={{ alignItems : receivedItemStyle.align}}>
        {this.props.data.map (element => {
            return <span className="single-item"
                style={{padding : receivedItemStyle.padding, alignSelf : receivedItemStyle.align}}>
              {element.image || null}
              <p className="item-title" style={{color : receivedTextColours.titleColour || '' }}>
                {element.title || null}
              </p>
              <p className="item-subtitle" style={{color: receivedTextColours.subtitleColour || '' } }>
                {element.subtitle || null}
              </p>
              <p className="item-text" style={{color: receivedTextColours.textColour || '', fontStyle : receivedTextStyle || ''}}>
                {element.text || null}
              </p>
            </span>
        })}
      </div>
    )
  }
}

export default SingleLineGrid;
