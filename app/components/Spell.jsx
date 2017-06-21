/* @flow */
import React from 'react';

import 'assets/styles/Spell.scss';

import spells from 'resources/spells.json';

export default class Spell extends React.Component {
  static defaultProps = {
    spell: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      spell: spells[this.props.spell],
      onCooldown: false,
      cooldownTimer: 0,
    };

    this.interval = null;
    this.cast = this.cast.bind(this);
  }

  state: {
    spell: any,
    onCooldown: boolean
  };

  cast(): void {
    if (this.state.onCooldown) return;

    clearInterval(this.interval);

    this.setState({
      onCooldown: true,
      cooldownTimer: this.state.spell.cooldown,
    });

    this.interval = setInterval(() => {
      this.setState({
        cooldownTimer: this.state.cooldownTimer - 1,
      });

      if (this.state.cooldownTimer === 0) {
        clearInterval(this.interval);
        this.setState({ onCooldown: false });
      }
    }, 1000);
  }

  render() {
    /* eslint-disable global-require, import/no-dynamic-require */
    const spellImage = require(`assets/images/game/spells/${this.state.spell.image}.png`);

    return (
      <div
        style={{
          transition: `all ${this.state.spell.cooldown}`,
        }}
        className={`spell ${this.state.onCooldown ? 'cooldown' : ''}`}
        onClick={this.cast}
      >
        <span className="hotkey">{this.state.cooldownTimer}</span>
        <img src={`public/${spellImage}`} alt="" />
      </div>
    );
  }
}
