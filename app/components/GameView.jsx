import React, { PropTypes } from 'react';
import './assets/styles/GameView.scss';

import Map from './Map';

const GameView = () =>
  (<div className="gameView">
    <Map />
  </div>);

export default GameView;
