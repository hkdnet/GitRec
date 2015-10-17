'use strict';

import React from 'react';
import { Grid, Row, Col, Label } from 'react-bootstrap';
import SyncInput from './SyncInput.js'

export default class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={3}>
            <Label>
              フィルタ
            </Label>
          </Col>
          <Col xs={9}>
            <SyncInput name="since_date" type="date"
              defaultValue={this.props.sinceDate} />
            <span>〜</span>
            <SyncInput name="until_date" type="date"
              defaultValue={this.props.untilDate} />
          </Col>
        </Row>
        <Row>
          <Col xs={9} xsOffset={3}>
            <SyncInput name="commiter"
              placeholder="commiter(optional)"
              defaultValue={this.props.commiter} />
          </Col>
        </Row>
      </Grid>
    )
  }
}
