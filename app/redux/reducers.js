import { combineReducers } from 'redux';

import character from 'components/Character/reducers';
import hotkeyBar from 'components/HotkeyBar/reducers';

const rootReducer = combineReducers({
  character,
  hotkeyBar,
});

export default rootReducer;
