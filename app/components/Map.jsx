import React, { PropTypes } from 'react';
import keydown from 'react-keydown';
import _ from 'lodash';
import Throttle from 'lodash-decorators/throttle';
import './assets/styles/Map.scss';

import Character from './Character';

import gameMap from '../../resources/map.json';
import tiles from '../../resources/tiles.json';
import npcs from '../../resources/npcs.json';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charPos: {
        x: 8,
        y: 5,
        z: 0,
        ref: 'down',
      },
    };
  }

  @Throttle(200, { trailing: false })
  walkTo(axis, value) {
    if (value < 0) return;

    this.setState((state) => {
      state.charPos[axis] = value;

      return state;
    });
  }

  @keydown('w')
  w() { this.walkTo('y', this.state.charPos.y - 1); }

  @keydown('s')
  s() { this.walkTo('y', this.state.charPos.y + 1); }

  @keydown('a')
  a() { this.walkTo('x', this.state.charPos.x - 1); }

  @keydown('d')
  d() { this.walkTo('x', this.state.charPos.x + 1); }

  render() {
    return (
      <div className="map">
        <div
          className="mapView"
          style={{
            left: -64 * (this.state.charPos.x - 7),
            top: -64 * (this.state.charPos.y - 5),
          }}
        >
          { _.map(gameMap, (mapPos, key) => {
            /* eslint-disable global-require, import/no-dynamic-require */
            const tileImage = require(`./assets/images/tiles/${tiles[mapPos.tile].image}`);

            return (
              <div
                className="tile"
                key={key}
                style={{
                  background: `url(${tileImage})`,
                  left: 64 * mapPos.x,
                  top: 64 * mapPos.y,
                }}
              >
                { _.map(mapPos.additional, (add) => {
                  const addImage = require(`./assets/images/${add.image}`);

                  return <img key={key} src={addImage} alt="" />;
                }) }
              </div>
            );
          }) }

          { _.map(npcs, function(npc, key) {
            return (
              <Character
                style={{
                  left: 64 * npc.pos.x,
                  top: 64 * npc.pos.y
                }}
                key={key}
                outfit={npc.outfit}
                name={npc.name}
                />
            )
          }) }
        </div>
        <Character name="Diego" className="mainCharacter" position={this.state.charPos.ref} />
      </div>
    );
  }
}

export default Map;
