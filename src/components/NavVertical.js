import React, { Component, } from 'react';
import BoxAndButtonEmail from './BoxAndButtonEmail.js';
import './styles/nav-vertical.css'


class NavVertical extends Component {
  render() {
    return  ( <nav id={this.props.id}>
        <span>
          {this.props.items.title}
        </span>
        {this.props.items.links.map (link => {
          switch (link.type) {
            case 'a':
              return <a href={link.path}>
                  {link.name}
                </a>
            default:
              return <a href={link.path}>
                  {link.name}
                </a>
        }})}
      </nav>
    )
  }
}

export default NavVertical;
