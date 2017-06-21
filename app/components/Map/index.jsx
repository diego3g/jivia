/* @flow */
import React from 'react';
import _ from 'lodash';
import config from 'config';
import { connect } from 'react-redux';

import 'assets/styles/Map.scss';

import Tile from 'components/Tile';
import Creature from 'components/Creature';

import gameMap from 'resources/map.json';
import npcs from 'resources/npcs.json';

const mapStateToProps = state => ({
  character: state.character,
});

@connect(mapStateToProps)
class Map extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      tiles: [],
    };
  }

  state: {
    tiles: any
  }

  render() {
    return (
      <div className="map">
        <div
          className="mapView"
          style={{
            left: (config.mapSize.sqm * -1) * (this.props.character.position.x - 9),
            top: (config.mapSize.sqm * -1) * (this.props.character.position.y - 5),
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
                const addImage = require(`assets/images/game/${add.image}`);
                return <img key={key} src={`public/${addImage}`} alt="" />;
              }) }
            </Tile>
          )) }

          { _.map(npcs, (npc, key) => (
            <Creature
              style={{
                left: config.mapSize.sqm * npc.x,
                top: config.mapSize.sqm * npc.y,
              }}
              key={key}
              outfit={npc.outfit}
              name={npc.name}
            />
          ))}
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default Map;
