import config from 'config';

import * as types from './types';

export function enableGlobalCooldown(amount = config.spell.globalCooldown) {
  return (dispatch) => {
    dispatch({
      type: types.ENABLE_GLOBAL_COOLDOWN,
    });

    setTimeout(() => {
      dispatch({
        type: types.DISABLE_GLOBAL_COOLDOWN,
      });
    }, (amount * 1000));
  };
}
