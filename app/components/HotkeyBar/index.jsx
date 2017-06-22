/* @flow */
import React from 'react';

import 'assets/styles/HotkeyBar.scss';

import Spell from 'components/HotkeyBar/components/Spell';
import Item from 'components/HotkeyBar/components/Item';

export default class HotkeyBar extends React.Component {
  static defaultProps = {};

  constructor(props: any) {
    super(props);

    this.state = {
      hotkeys: [
        {
          type: Item,
          shortcut: '1',
          id: 'health-potion',
        },
        {
          type: Item,
          shortcut: '2',
          id: 'mana-potion',
        },
        {
          type: Spell,
          shortcut: '3',
          id: 'enchant',
        },
        {
          type: Spell,
          shortcut: '4',
          id: 'heal',
        },
        {
          type: Spell,
          shortcut: '5',
          id: 'intense-heal',
        },
      ],
    };
  }

  state: {}

  renderHotkeys() {
    const hotkeys = [];

    for (let i = 0; i < 21; i += 1) {
      const HotkeyComponent = this.state.hotkeys[i] ? this.state.hotkeys[i].type : '';

      hotkeys.push(
        <div key={i} className="hotkey">
          { this.state.hotkeys[i] &&
            <HotkeyComponent
              shortcut={this.state.hotkeys[i].shortcut}
              id={this.state.hotkeys[i].id}
            /> }
        </div>,
      );
    }

    return hotkeys;
  }

  render() {
    return (
      <div className="hotkeyBar">
        { this.renderHotkeys() }
      </div>
    );
  }
}
