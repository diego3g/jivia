import _ from 'lodash';
import Tile from 'components/Tile';

import * as types from './types';

export function walk(axis, quantity = 1) {
  return (dispatch, getState) => {
    const { position } = getState().character;

    const newPosition = _.clone(position);
    newPosition[axis] += quantity;

    if (newPosition[axis] < 0) return;
    if (!Tile.isWalkable(newPosition)) return;

    dispatch({
      type: types.WALK,
      position: newPosition,
    });
  };
}

export const heal = () => ({
  type: types.HEAL,
});
