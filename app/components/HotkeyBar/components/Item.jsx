/* @flow */
import React from 'react';

import items from 'resources/items.json';

import Hotkey from './Hotkey';

export default class Item extends React.Component {
  static defaultProps = {
    id: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      item: items[this.props.id],
    };

    this.cast = this.cast.bind(this);
  }

  state: {
    item: any,
  };

  cast(): void {
    return this;
  }

  render() {
    /* eslint-disable global-require, import/no-dynamic-require */
    const itemImage = require(`assets/images/game/items/${this.state.item.image}.png`);
    const itemAudio = `game/itens/${this.state.item.image}.flac`;

    return (
      <div className="hotkeyImage" onClick={this.cast}>
        <img src={`public/${itemImage}`} alt="" />

        <Hotkey
          shortcut={this.props.shortcut}
          cooldown={this.state.item.cooldown}
          audio={itemAudio}
        />
      </div>
    );
  }
}
