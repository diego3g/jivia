/* @flow */
import React from 'react';
import config from 'config';

import 'assets/styles/GameView.scss';

import Map from 'components/Map';
import Character from 'components/Character';

const GameView = () => {
  const mapWidth = config.mapSize.x * config.mapSize.sqm;
  const mapHeight = config.mapSize.y * config.mapSize.sqm;

  return (
    <div
      style={{
        width: `${mapWidth}px`,
        height: `${mapHeight}px`,
      }}
      className="gameView"
    >
      <Map>
        <Character className="mainCharacter" />
      </Map>
    </div>
  );
};

export default GameView;
