import React, { PropTypes } from 'react';
import './assets/styles/GameView.scss';

import Map from './Map';
import Character from './Character';

const GameView = () =>
  (<div className="gameView">
    <Map>
      <Character />
    </Map>
  </div>);

export default GameView;
