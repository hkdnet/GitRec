'use strict'

/*
 * action types
 */
export const INPUT_OWNER = 'INPUT_OWNER';
export const INPUT_REPO = 'INPUT_REPO'
export const INPUT_SINCE_DATE = 'INPUT_SINCE_DATE'
export const INPUT_UNTIL_DATE = 'INPUT_UNTIL_DATE'
export const INPUT_COMMITER = 'INPUT_COMMITER'
export const SEND_BUTTON_CLICKED = 'SEND_BUTTON_CLICKED'

/*
 * action creators
 */

export function inputOwner(text) {
  return { type: INPUT_OWNER, text };
}
export function inputRepo(text) {
  return { type: INPUT_REPO, text };
}
export function inputSinceDate(text) {
  return { type: INPUT_SINCE_DATE, text };
}
export function inputUntilDate(text) {
  return { type: INPUT_UNTIL_DATE, text };
}
export function inputCommiter(text) {
  return { type: INPUT_COMMITER, text };
}

export function sendButtonClicked() {
  return { type: SEND_BUTTON_CLICKED }
}
