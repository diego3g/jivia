import * as types from './types';

const initialState = {
  name: 'Diego',
  position: {
    x: 5,
    y: 6,
    z: 0,
  },
};

export default function character(state = initialState, action) {
  switch (action.type) {
    case types.WALK:
      return {
        position: action.position,
      };

    default:
      return state;
  }
}
