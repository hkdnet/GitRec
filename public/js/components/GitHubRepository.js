'use strict';

import React from 'react';
import { Label, Grid, Row, Col } from 'react-bootstrap';

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
            <input id="owner" defaultValue={this.props.owner}
              onChange={this.props.ownerChangeHandler}
              placeholder="owner" />
            <span>/</span>
            <input id="repo" defaultValue={this.props.repo}
              onChange={this.props.repoChangeHandler}
              placeholder="repo" />
          </Col>
        </Row>
      </Grid>
    )
  }
}
