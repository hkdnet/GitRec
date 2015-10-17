'use strict'

import React from 'react';
import { connect } from 'react-redux';

export const SYNC_INPUT_CHANGE = 'SYNC_INPUT_CHANGE'

function inputChange(name, value) {
  return {
    type: SYNC_INPUT_CHANGE,
    value: value,
    name: name
  };
}

class SyncInput extends React.Component {
  render() {
    const { dispatch, name } = this.props;
    return (
      <input id={this.props.id} type={this.props.type || 'text'}
        defaultValue={this.props.value} placeholder={this.props.placeholder}
        name={name} onChange={(e)=>{
          dispatch(inputChange(name, e.target.value));
        }} />
    )
  }
}

export default connect((arg) => arg)(SyncInput);
