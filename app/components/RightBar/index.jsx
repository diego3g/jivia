/* @flow */
import React from 'react';
import 'assets/styles/RightBar.scss';

import GeneralInfo from './components/GeneralInfo';
import Equipment from './components/Equipment';

const RightBar = () => (
  <div className="rightBar">
    <GeneralInfo />
    <Equipment />
  </div>
);

export default RightBar;
