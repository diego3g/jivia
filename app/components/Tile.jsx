/* @flow */
import React from 'react';

import tiles from '../../resources/tiles.json';

class Tile extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      tile: tiles[this.props.tile],
      x: this.props.x,
      y: this.props.y,
    };
  }

  state: {
    tile: {
      type: string,
      x: number,
      y: number,
      walkable: boolean,
    },
    x: number,
    y: number,
  }

  render() {
    /* eslint-disable global-require, import/no-dynamic-require */
    const tileImage = require(`./assets/images/tiles/${this.state.tile.type}/sprite.png`);

    return (
      <div
        className="tile"
        style={{
          background: `url(public/${tileImage}) ${this.state.tile.x * 64}px ${this.state.tile.y * 64}px`,
          left: 64 * this.state.x,
          top: 64 * this.state.y,
        }}
      />
    );
  }
}

export default Tile;
