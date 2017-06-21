import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from 'redux/reducers';
import 'app.scss';

import GameView from 'components/GameView';
import HotkeyBar from 'components/HotkeyBar';

const middleware = [thunkMiddleware];

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...middleware),
  ),
);

const App = () => (
  <div className="wrapper">
    <div className="gameContainer">
      <GameView />
      <div className="rightBar" />
    </div>
    <div className="hotkeysContainer">
      <HotkeyBar />
    </div>
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
