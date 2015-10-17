'use strict'

/*
 * action types
 */
export const INPUT_OWNER = 'INPUT_OWNER';

/*
 * action creators
 */

export function inputOwner(text) {
  return { type: INPUT_OWNER, text };
}
