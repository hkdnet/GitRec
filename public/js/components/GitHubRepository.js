'use strict';

import React from 'react';
import { Label, Grid, Row, Col } from 'react-bootstrap';
import SyncInput from './SyncInput.js'

export default class GitHubRepository extends React.Component {
  render() {
    return(
      <Grid>
        <Row>
          <Col xs={3}>
            <Label>
              GitHubレポジトリ
            </Label>
          </Col>
          <Col xs={9}>
            <SyncInput name="owner" value={this.props.owner}
              placeholder="owner" />
            <span>/</span>
            <SyncInput name="repo" defaultValue={this.props.repo}
              placeholder="repo" />
          </Col>
        </Row>
      </Grid>
    )
  }
}
