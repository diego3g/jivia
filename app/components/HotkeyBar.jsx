/* @flow */
import React from 'react';
import _ from 'lodash';

import 'assets/styles/HotkeyBar.scss';

import Spell from 'components/Spell';

import spells from 'resources/spells.json';

export default class HotkeyBar extends React.Component {
  static defaultProps = {};

  constructor(props: any) {
    super(props);

    this.state = {};
  }

  state: {};

  render() {
    return (
      <div className="hotkeyBar">
        { _.map(spells, (spell, key) => (
          <Spell spell={key} key={key} />
        )) }
      </div>
    );
  }
}
