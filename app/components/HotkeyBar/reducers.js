import * as types from './types';

const initialState = {
  globalCooldown: false,
};

export default function globalCooldown(state = initialState, action) {
  switch (action.type) {
    case types.ENABLE_GLOBAL_COOLDOWN:
      return {
        globalCooldown: true,
      };

    case types.DISABLE_GLOBAL_COOLDOWN:
      return {
        globalCooldown: false,
      };

    default:
      return state;
  }
}
