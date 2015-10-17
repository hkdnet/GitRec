'use strict'

/*
 * action types
 */
export const INPUT_OWNER = 'INPUT_OWNER';
export const SEND_BUTTON_CLICKED = 'SEND_BUTTON_CLICKED'

/*
 * action creators
 */

export function inputOwner(text) {
  return { type: INPUT_OWNER, text };
}

export function sendButtonClicked() {
  return { type: SEND_BUTTON_CLICKED }
}
