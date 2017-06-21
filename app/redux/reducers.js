import { combineReducers } from 'redux';
import character from 'components/Character/reducers';

const rootReducer = combineReducers({
  character,
});

export default rootReducer;
