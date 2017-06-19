import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

import GameView from './components/GameView';

const App = () =>
  (<div className="wrapper">
    <div className="gameContainer">
      <GameView />
      <div className="rightBar" />
    </div>
  </div>);

ReactDOM.render(<App />, document.getElementById('app'));
