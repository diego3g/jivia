/* @flow */
import React from 'react';
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
          { gameMap.map(mapPos => (
            <Tile
              key={`${mapPos.z}${mapPos.y}${mapPos.x}`}
              tile={mapPos.tile}
              x={mapPos.x}
              y={mapPos.y}
              z={mapPos.z}
            >
              { mapPos.additional.map((add) => {
                /* eslint-disable global-require, import/no-dynamic-require */
                const addImage = require(`assets/images/game/${add.image}`);
                return <img key={`${mapPos.z}${mapPos.y}${mapPos.x}`} src={`public/${addImage}`} alt="" />;
              }) }
            </Tile>
          )) }

          { npcs.map(npc => (
            <Creature
              style={{
                left: config.mapSize.sqm * npc.x,
                top: config.mapSize.sqm * npc.y,
              }}
              key={npc.name}
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
