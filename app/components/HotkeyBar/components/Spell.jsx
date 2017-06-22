/* @flow */
import React from 'react';

import spells from 'resources/spells.json';

import Hotkey from './Hotkey';

export default class Spell extends React.Component {
  static defaultProps = {
    id: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      spell: spells[this.props.id],
    };

    this.cast = this.cast.bind(this);
  }

  state: {
    spell: any,
  };

  cast(): void {
    return this;
  }

  render() {
    /* eslint-disable global-require, import/no-dynamic-require */
    const spellImage = require(`assets/images/game/spells/${this.state.spell.image}.png`);
    const spellSFX = `game/spells/${this.state.spell.image}.wav`;

    return (
      <div className="hotkeyImage" onClick={this.cast}>
        <img src={`public/${spellImage}`} alt="" />

        <Hotkey shortcut={this.props.shortcut} cooldown={this.state.spell.cooldown} audio={spellSFX} />
      </div>
    );
  }
}
