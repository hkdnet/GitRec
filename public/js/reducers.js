'use strict'

import { combineReducers } from 'redux';
import { INPUT_OWNER,         inputOwner,
         INPUT_REPO,          inputRepo,
         INPUT_SINCE_DATE,    inputSinceDate,
         INPUT_UNTIL_DATE,    inputUntilDate,
         INPUT_COMMITER,      inputCommiter,
         SEND_BUTTON_CLICKED, sendButtonClicked } from './actions.js';

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
    case INPUT_OWNER:
      return Object.assign({}, state, {
        owner: action.text
      });
      break;
    case INPUT_REPO:
      return Object.assign({}, state, {
        repo: action.text
      })
      break;
    case INPUT_SINCE_DATE:
      return Object.assign({}, state, {
        sinceDate: action.text
      })
      break;
    case INPUT_UNTIL_DATE:
      return Object.assign({}, state, {
        untilDate: action.text
      })
      break;
    case INPUT_COMMITER:
      return Object.assign({}, state, {
        commiter: action.text
      })
      break;
    case SEND_BUTTON_CLICKED:
      if(!state.owner || !state.repo) {
        toastr.error('please fill your repository information', 'ERROR');
        return state;
      }
      toastr.info('sending...', 'INFO');
      $.get('/mail', mapToParam(state), 'text').done(() =>{
        toastr.clear();
        toastr.success('GitRec report was successfully sent', 'GitRec report');
      }).fail(() => {
        console.error(arguments);
        toastr.clear();
        toastr.error('Sorry, something went wrong...', 'GitRec report');
      });
      return state
    default:
      return state
  }
}

const gitRecApp = combineReducers({ inputs });

export default gitRecApp;
