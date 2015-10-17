'use strict'

import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col, Label } from 'react-bootstrap';

import GitHubRepository from './GitHubRepository.js'
import SearchFilter from './SearchFilter.js'
import Help from './Help.js'

import { inputOwner,
         inputRepo,
         inputSinceDate,
         inputUntilDate,
         inputCommiter,
         sendButtonClicked } from '../actions.js'

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
            <GitHubRepository
              owner={owner} repo={repo}
              ownerChangeHandler={(e) => dispatch(inputOwner(e.target.value)) }
              repoChangeHandler={(e) => dispatch(inputRepo(e.target.value))}
              />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <SearchFilter
              sinceDate={sinceDate} untilDate={untilDate} commiter={commiter}
              sinceDateChangeHandler={(e) =>
                dispatch(inputSinceDate(e.target.value))
              }
              untilDateChangeHandler={(e) =>
                dispatch(inputUntilDate(e.target.value))
              }
              commiterChangeHandler={(e) =>
                dispatch(inputCommiter(e.target.value))
              }
              />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button id="send-mail" onClick={(e)=>dispatch(sendButtonClicked())}>
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
