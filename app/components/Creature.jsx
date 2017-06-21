/* @flow */
import React from 'react';
import config from 'config';

import 'assets/styles/Creature.scss';

import outfits from 'resources/outfits.json';

export default class Creature extends React.Component {
  static defaultProps = {
    life: 1,
    outfit: '1',
    position: 'down',
    style: {},
  };

  constructor(props: any) {
    super(props);

    this.state = {
      name: props.name,
      life: props.life,
      outfit: props.outfit,
      position: props.position,
      keyState: {},
    };
  }

  state: {
    name: string,
    life: number,
    outfit: string,
    position: string,
    keyState: any,
  }

  render() {
    /* eslint-disable global-require, import/no-dynamic-require */
    const outfitImage = require(`assets/images/game/outfits/${outfits[this.state.outfit].image}-${this.state.position}.png`);

    let lifeStatus;
    if (this.state.life < 0.1) {
      lifeStatus = 'critical';
    } else if (this.state.life < 0.3) {
      lifeStatus = 'very-low';
    } else if (this.state.life < 0.7) {
      lifeStatus = 'low';
    }

    return (
      <div
        style={Object.assign(this.props.style, {
          width: `${config.mapSize.sqm}px`,
          height: `${config.mapSize.sqm}px`,
        })}
        className="character"
      >
        <div className={`characterInfo status-${lifeStatus}`}>
          <span className="name">{this.state.name}</span>
          <span className="bar">
            <span className="percentage" style={{ width: `${this.state.life * 100}%` }} />
          </span>
        </div>
        <img src={`public/${outfitImage}`} alt="" />
      </div>
    );
  }
}
