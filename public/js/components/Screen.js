'use strict'

// library
import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col, Label } from 'react-bootstrap';

// components
import GitHubRepository from './GitHubRepository.js'
import SearchFilter from './SearchFilter.js'
import Help from './Help.js'

import { sendButtonClicked } from '../actions.js'

class Screen extends React.Component {
  render() {
    const { dispatch, owner, repo, sinceDate, untilDate, commiter } = this.props;
    return (
      <Grid className="screen">
        <Row>
          <Col xs={12}>
            <h1 className="title">GitRec</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <GitHubRepository owner={owner} repo={repo} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <SearchFilter sinceDate={sinceDate} untilDate={untilDate}
              commiter={commiter} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button id="send-mail" onClick={(e) =>
                dispatch(sendButtonClicked(this.props.inputs)) }>
              send GitRec report
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Help />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect((arg) => arg)(Screen);
