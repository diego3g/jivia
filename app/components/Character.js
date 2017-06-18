import React, { PropTypes } from 'react'
import './assets/styles/Character.scss'

class Character extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      outfit: 'gm'
    }
  }

  render() {
    const outfitImage = require(`./assets/images/characters/${this.state.outfit}.png`)

    return (
      <div className="character">
        <img src={outfitImage} alt=""/>
      </div>
    )
  }
}

export default Character
