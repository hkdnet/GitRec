'use strict';

import React from 'react';
import { Grid, Row, Col, Label } from 'react-bootstrap';

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
            <input id="since_date" type="date"
              defaultValue={this.props.sinceDate}
              onChange={this.props.sinceDateChangeHandler} />
            <span>〜</span>
            <input id="until_date" type="date"
              defaultValue={this.props.untilDate}
              onChange={this.props.untilDateChangeHandler} />
          </Col>
        </Row>
        <Row>
          <Col xs={9} xsOffset={3}>
            <input id="commiter"
              placeholder="commiter(optional)"
              defaultValue={this.props.commiter}
              onChange={this.props.commiterChangeHandler.bind(this)} />
          </Col>
        </Row>
      </Grid>
    )
  }
}
