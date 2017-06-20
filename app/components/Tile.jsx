/* @flow */
import React from 'react';
import _ from 'lodash';

import gameMap from '../../resources/map.json';
import tiles from '../../resources/tiles.json';
import npcs from '../../resources/npcs.json';

class Tile extends React.Component {
  static isWalkable(pos: any): void {
    const mapTile = _.find(gameMap, { x: pos.x, y: pos.y, z: pos.z });

    if (!mapTile) return false;
    if (!tiles[mapTile.tile].walkable) return false;
    if (_.find(mapTile.additional, { walkable: false }) !== undefined) return false;

    const npcTile = _.find(npcs, { x: pos.x, y: pos.y, z: pos.z });
    if (npcTile) return false;

    return true;
  }

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
      >
        { this.props.children }
      </div>
    );
  }
}

export default Tile;
