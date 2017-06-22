/* @flow */
import React from 'react';

import 'assets/styles/HotkeyBar.scss';

import Spell from 'components/HotkeyBar/components/Spell';

export default class HotkeyBar extends React.Component {
  static defaultProps = {};

  constructor(props: any) {
    super(props);

    this.state = {
      hotkeys: [
        {
          type: 'spell',
          shortcut: '1',
          id: 'enchant',
        },
        {
          type: 'spell',
          shortcut: '2',
          id: 'heal',
        },
        {
          type: 'spell',
          shortcut: '3',
          id: 'intense-heal',
        },
      ],
    };
  }

  state: {}

  renderHotkeys() {
    const hotkeys = [];

    for (let i = 0; i < 21; i += 1) {
      hotkeys.push(
        <div key={i} className="hotkey">
          { this.state.hotkeys[i] &&
            <Spell
              shortcut={this.state.hotkeys[i].shortcut}
              spell={this.state.hotkeys[i].id}
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
