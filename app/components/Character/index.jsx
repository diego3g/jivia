/* @flow */
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Throttle from 'lodash-decorators/throttle';

import 'assets/styles/Character.scss';

import Creature from 'components/Creature';

import * as actions from './actions';

const mapStateToProps = state => ({
  character: state.character,
});

@connect(mapStateToProps, dispatch => bindActionCreators(actions, dispatch))
class Character extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      keyState: {},
    };
  }

  state: {
    keyState: any,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this), true);
    window.addEventListener('keyup', this.handleKeyUp.bind(this), true);

    setInterval(this.walk.bind(this), 10);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this), true);
    window.removeEventListener('keyup', this.handleKeyUp.bind(this), true);
  }

  handleKeyDown(e: any): void {
    this.setState((state) => {
      const newState = state;

      newState.keyState[e.key] = true;
      return newState;
    });
  }

  handleKeyUp(e: any): void {
    this.setState((state) => {
      const newState = state;

      newState.keyState[e.key] = false;
      return newState;
    });
  }

  @Throttle(200, { trailing: false })
  walk() {
    if (this.state.keyState.w) {
      this.props.walk('y', -1);
    } else if (this.state.keyState.s) {
      this.props.walk('y', 1);
    } else if (this.state.keyState.a) {
      this.props.walk('x', -1);
    } else if (this.state.keyState.d) {
      this.props.walk('x', 1);
    }
  }

  render() {
    return (
      <Creature
        name={this.props.character.name}
      />
    );
  }
}

export default Character;
