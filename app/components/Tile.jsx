import React, { PropTypes } from 'react';

import tiles from '../../resources/tiles.json';

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tile: tiles[this.props.tile],
      x: this.props.x,
      y: this.props.y,
    };
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

Tile.propTypes = {
  tile: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Tile;
