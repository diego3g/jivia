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
      image: string,
      walkable: boolean,
    },
    x: number,
    y: number,
  }

  render() {
    /* eslint-disable global-require, import/no-dynamic-require */
    const tileImage = require(`./assets/images/tiles/${this.state.tile.image}`);

    return (
      <div
        className="tile"
        style={{
          background: `url(${tileImage})`,
          left: 64 * this.state.x,
          top: 64 * this.state.y,
        }}
      />
    );
  }
}

export default Tile;
