/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import KeyHandler, { KEYDOWN } from 'react-key-handler';

import 'assets/styles/Hotkey.scss';

import * as actions from '../actions';

const mapStateToProps = state => ({
  globalCooldown: state.hotkeyBar.globalCooldown,
});

@connect(mapStateToProps, dispatch => bindActionCreators(actions, dispatch))
export default class Hotkey extends React.Component {
  static defaultProps = {
    cooldown: 0,
    shortcut: null,
    audio: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      onCooldown: false,
      cooldownTimer: 0,
    };

    this.interval = null;
    this.cast = this.cast.bind(this);
  }

  state: {
    onCooldown: boolean,
    cooldownTimer: number,
  };

  setOnCooldown(amount = this.props.cooldown): void {
    clearInterval(this.interval);

    this.setState({
      onCooldown: true,
      cooldownTimer: amount,
    });

    let cooldownCounter = 0;
    this.interval = setInterval(() => {
      cooldownCounter += 100;

      if (this.state.cooldownTimer > 1) {
        if (cooldownCounter === 1000) {
          this.setState({ cooldownTimer: this.state.cooldownTimer - 1 });
          cooldownCounter = 0;
        }
      } else {
        this.setState({
          cooldownTimer: (Math.round((this.state.cooldownTimer - 0.1) * 100) / 100),
        });
      }

      if (this.state.cooldownTimer === 0) {
        clearInterval(this.interval);
        this.setState({ onCooldown: false });
      }
    }, 100);
  }

  cast(): void {
    if (this.state.onCooldown || this.props.globalCooldown) return;

    let SFX;
    try {
      /* eslint-disable global-require, import/no-dynamic-require */
      SFX = require(`assets/audios/${this.props.audio}`);
    } catch (error) {
      console.error(`Arquivo de audio não encontrado. Error: ${error}`);
    }

    const player = new Audio(`public/${SFX}`);

    player.volume = 0.5;
    player.play();

    this.props.enableGlobalCooldown();
    this.setOnCooldown();
  }

  renderCooldownTimer() {
    return (
      <div className="cooldownTimer">
        <div style={{ animationDuration: `${this.props.cooldown}s` }} className="cooldownAnimation" />
        <span>{this.state.cooldownTimer}</span>
      </div>
    );
  }

  render() {
    return (
      <div className="hotkeyOverlay" onClick={this.cast}>
        <KeyHandler
          keyEventName={KEYDOWN}
          keyValue={this.props.shortcut}
          onKeyHandle={this.cast}
        />
        <span className="shortcut">{ this.props.shortcut }</span>

        { (this.props.globalCooldown && !this.state.onCooldown) && <div className="globalCooldown" /> }
        { this.state.onCooldown && this.renderCooldownTimer() }
      </div>
    );
  }
}
