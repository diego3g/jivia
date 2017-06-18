import React, { PropTypes } from 'react';
import './assets/styles/Character.scss';

import outfits from '../../resources/outfits.json';

class Character extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      life: props.life || 1,
      outfit: props.outfit || '1',
      position: props.position || 'down',
    }
  }

  render() {
    /* eslint-disable global-require, import/no-dynamic-require */
    const outfitImage = require(`./assets/images/outfits/${outfits[this.state.outfit].image}-${this.state.position}.png`);

    return (
      <div style={this.props.style} className="character">
        <div className="characterInfo">
          <span className="name">{this.state.name}</span>
          <span className="bar">
            <span className="percentage" style={{ width: `${this.state.life * 100}%` }}></span>
          </span>
        </div>
        <img src={outfitImage} />
      </div>
    );
  }
}

export default Character;
