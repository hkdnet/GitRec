'use strict'

/*
 * action types
 */
export const SEND_BUTTON_CLICKED = 'SEND_BUTTON_CLICKED'

/*
 * action creators
 */

export function sendButtonClicked(state) {
  return { type: SEND_BUTTON_CLICKED, state: state }
}
