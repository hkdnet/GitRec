'use strict'

import { combineReducers } from 'redux';
import { SEND_BUTTON_CLICKED, sendButtonClicked } from './actions.js';
import { SYNC_INPUT_CHANGE } from './components/SyncInput.js'


import toastr from 'toastr';
import $ from 'jquery'
import dateFormat from 'dateformat';

let today = new Date();
let oneWeekAgo = (new Date()).setDate(today.getDate() - 7);
const DATE_PATTERN = 'yyyy-mm-dd'

const initialInputs = {
  owner: '',
  repo: '',
  sinceDate: dateFormat(oneWeekAgo, DATE_PATTERN),
  untilDate: dateFormat(today, DATE_PATTERN),
  commiter: ''
}

function mapToParam(state) {
  return {
    owner: state.owner,
    repo: state.repo,
    since_date: state.sinceDate,
    until_date: state.untilDate,
    author: state.commiter
  }
}

function inputs(state = initialInputs, action) {
  switch (action.type) {
    case SYNC_INPUT_CHANGE:
      let obj = {};
      obj[action.name] = action.value;
      return Object.assign({}, state, obj);
    default:
      return state
  }
}

function clicks(state = {}, action) {
  switch (action.type) {
    case SEND_BUTTON_CLICKED:
      console.log(action)
      if(!action.state.owner || !action.state.repo) {
        toastr.error('please fill your repository information', 'ERROR');
        break;
      }
      toastr.info('sending...', 'INFO');
      $.get('/mail', mapToParam(action.state), 'text').done(() =>{
        toastr.clear();
        toastr.success('GitRec report was successfully sent', 'GitRec report');
      }).fail(() => {
        console.error(arguments);
        toastr.clear();
        toastr.error('Sorry, something went wrong...', 'GitRec report');
      });
  }
  return state;
}

const gitRecApp = combineReducers({ inputs, clicks });

export default gitRecApp;
