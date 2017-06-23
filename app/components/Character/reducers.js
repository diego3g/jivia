import * as types from './types';

const initialState = {
  name: 'Diego',
  level: 13,
  experience: {
    current: 19900,
    total: 25000,
  },
  health: {
    current: 135,
    total: 400,
  },
  mana: {
    current: 45,
    total: 70,
  },
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
