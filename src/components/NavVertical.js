import React, { Component, } from 'react';
import BoxAndButtonEmail from './BoxAndButtonEmail.js';
import './styles/nav-vertical.css'


class NavVertical extends Component {
  render() {
    return  ( <div>
        <ul id={this.props.id} className="flex-item-no-inline">
          <li className="nav-title">
            {this.props.items.title}
          </li>
          {this.props.items.links.map (link => {
            switch (link.type) {
              case 'a':
                return <li> <a href={link.path}>{link.name}</a> </li>
              default:
                return <li> <a href={link.path}>{link.name}</a> </li>
          }})}
        </ul>
       </div>
    )
  }
}

export default NavVertical;
