/* @flow */
import React from 'react';
import _ from 'lodash';
import Throttle from 'lodash-decorators/throttle';
import './assets/styles/Map.scss';

import Tile from './Tile';
import Character from './Character';

import gameMap from '../../resources/map.json';
import npcs from '../../resources/npcs.json';

class Map extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      tiles: [],
      keyState: {},
      charPos: {
        x: 8,
        y: 5,
        z: 0,
        ref: 'down',
      },
    };
  }

  state: {
    tiles: any,
    keyState: any,
    charPos: {
      x: number,
      y: number,
      z: number,
      ref: string,
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this), true);
    window.addEventListener('keyup', this.handleKeyUp.bind(this), true);

    setInterval(this.walk.bind(this), 10);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this), true);
    window.removeEventListener('keyup', this.handleKeyUp.bind(this), true);
  }

  handleKeyDown(e: any): void {
    this.setState((state) => {
      const newState = state;

      newState.keyState[e.key] = true;
      return newState;
    });
  }

  handleKeyUp(e: any): void {
    this.setState((state) => {
      const newState = state;

      newState.keyState[e.key] = false;
      return newState;
    });
  }

  @Throttle(200, { trailing: false })
  walkTo(axis: string, value: number): void {
    if (value < 0) return;

    const newPos = _.clone(this.state.charPos);
    newPos[axis] = value;

    if (!Tile.isWalkable(newPos)) return;

    this.setState((state) => {
      const newState = state;
      newState.charPos = newPos;

      return newState;
    });
  }

  walk() {
    if (this.state.keyState.w) {
      this.walkTo('y', this.state.charPos.y - 1);
    } else if (this.state.keyState.s) {
      this.walkTo('y', this.state.charPos.y + 1);
    } else if (this.state.keyState.a) {
      this.walkTo('x', this.state.charPos.x - 1);
    } else if (this.state.keyState.d) {
      this.walkTo('x', this.state.charPos.x + 1);
    }
  }

  render() {
    return (
      <div className="map">
        <div
          className="mapView"
          style={{
            left: -64 * (this.state.charPos.x - 9),
            top: -64 * (this.state.charPos.y - 5),
          }}
        >
          { _.map(gameMap, (mapPos, key) => (
            <Tile
              key={key}
              tile={mapPos.tile}
              x={mapPos.x}
              y={mapPos.y}
              z={mapPos.z}
            >
              { _.map(mapPos.additional, (add) => {
                /* eslint-disable global-require, import/no-dynamic-require */
                const addImage = require(`./assets/images/${add.image}`);
                return <img key={key} src={`public/${addImage}`} alt="" />;
              }) }
            </Tile>
          )) }

          { _.map(npcs, (npc, key) => (
            <Character
              style={{
                left: 64 * npc.x,
                top: 64 * npc.y,
              }}
              key={key}
              outfit={npc.outfit}
              name={npc.name}
            />
          ))}
        </div>
        <Character name="Diego" className="mainCharacter" life={0.5} position={this.state.charPos.ref} />
      </div>
    );
  }
}

export default Map;
