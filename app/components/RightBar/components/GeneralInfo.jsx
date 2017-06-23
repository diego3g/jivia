/* @flow */
import React from 'react';
import 'assets/styles/RightBar-GeneralInfo.scss';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  character: state.character,
});

@connect(mapStateToProps)
export default class GeneralInfo extends React.Component {
  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  state: {};

  render() {
    return (
      <div className="generalInfo">
        <div className="experience">
          <span className="character-level">Level { this.props.character.level }</span>
          <span className="character-experience">
            { this.props.character.experience.current } / { this.props.character.experience.total }
          </span>
        </div>

        <div className="bar bar--experience">
          <span
            style={{
              width: `${(this.props.character.experience.current * 100) / this.props.character.experience.total}%`,
            }}
          />
        </div>

        <div className="status">
          <div className="barWrapper">
            <div className="bar bar--health">
              <span
                style={{
                  width: `${(this.props.character.health.current * 100) / this.props.character.health.total}%`,
                }}
              />
            </div>
            <div className="amount">{ this.props.character.health.current }</div>
          </div>

          <div className="barWrapper">
            <div className="bar bar--mana">
              <span
                style={{
                  width: `${(this.props.character.mana.current * 100) / this.props.character.mana.total}%`,
                }}
              />
            </div>
            <div className="amount">{ this.props.character.mana.current }</div>
          </div>
        </div>
      </div>
    );
  }
}
