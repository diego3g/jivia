import React from 'react'
import ReactDOM from 'react-dom'
import './app.scss'

import GameView from './components/GameView'

class App extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <div className="gameContainer">
          <div className="leftBar"></div>
          <GameView />
          <div className="rightBar"></div>
        </div>
        <div className="chatContainer">
          <h1>Hello</h1>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
