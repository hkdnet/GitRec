import { combineReducers } from 'redux';
import { INPUT_OWNER, inputOwner } from './actions.js';

const initialInputs = {
  owner: ''
}
function inputs(state = initialInputs, action) {
  switch (action.type) {
    case INPUT_OWNER:
      return Object.assign({}, state, {
        owner: action.text
      });
      break;
    default:
      return state
  }
}

const gitRecApp = combineReducers({
  inputs
})

export default gitRecApp;
