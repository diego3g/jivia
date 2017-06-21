/* @flow */
import React from 'react';
import 'components/assets/styles/GameView.scss';

import Map from 'components/Map';
import Character from 'components/Character';

const GameView = () =>
  (<div className="gameView">
    <Map>
      <Character className="mainCharacter" />
    </Map>
  </div>);

export default GameView;
