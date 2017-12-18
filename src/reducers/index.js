import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import DebtsReducer from './reducer_debts'

const rootReducer = combineReducers({
  debts: DebtsReducer
});

export default rootReducer;
