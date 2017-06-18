import React, { PropTypes } from 'react'
import './assets/styles/GameView.scss'

import Map from './Map'
import Character from './Character'

class GameView extends React.Component {
  render () {
    return (
      <div className="gameView">
        <Map>
          <Character />
        </Map>
      </div>
    )
  }
}

export default GameView
