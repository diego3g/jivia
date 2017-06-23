/* @flow */
import React from 'react';
import 'assets/styles/RightBar-Equipment.scss';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  character: state.character,
});

@connect(mapStateToProps)
export default class Equipment extends React.Component {
  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  state: {};

  render() {
    return (
      <div className="equipment">
        <div className="equipment-line">
          <div className="equipment-slot" />
          <div className="equipment-slot" />
          <div className="equipment-slot" />
        </div>
        <div className="equipment-line">
          <div className="equipment-slot" />
          <div className="equipment-slot" />
          <div className="equipment-slot" />
        </div>
        <div className="equipment-line">
          <div className="equipment-slot" />
          <div className="equipment-slot" />
          <div className="equipment-slot" />
        </div>
        <div className="equipment-line">
          <div className="equipment-slot" />
          <div className="equipment-slot" />
          <div className="equipment-slot" />
        </div>
      </div>
    );
  }
}
