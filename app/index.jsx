import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import './app.scss';

import GameView from './components/GameView';

const store = createStore(reducers);

const App = () =>
  (<div className="wrapper">
    <div className="gameContainer">
      <GameView />
      <div className="rightBar" />
    </div>
  </div>);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
