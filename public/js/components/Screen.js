'use strict'

import React from 'react';
import { Button, Grid, Row, Col, Label } from 'react-bootstrap';
import toastr from 'toastr';
import dateFormat from 'dateformat';
import $ from 'jquery'

import GitHubRepository from './GitHubRepository.js'
import SearchFilter from './SearchFilter.js'
import Help from './Help.js'

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date();
    let oneWeekAgo = (new Date()).setDate(today.getDate() - 7);
    this.state = {
      owner: '',
      repo: '',
      sinceDate: dateFormat(oneWeekAgo, 'yyyy-mm-dd'),
      untilDate: dateFormat(today, 'yyyy-mm-dd'),
      commiter: ''
    };
  }
  mapToParam(state) {
    return {
      owner: state.owner,
      repo: state.repo,
      since_date: state.sinceDate,
      until_date: state.untilDate,
      author: state.commiter
    }
  }
  sendButtonClickHandler() {
    if(!this.state.owner || !this.state.repo) {
      toastr.error('please fill your repository information', 'ERROR');
      return false;
    }
    toastr.info('sending...', 'INFO');
    $.get('/mail', this.mapToParam(this.state), 'text').done(() =>{
      toastr.clear();
      toastr.success('GitRec report was successfully sent', 'GitRec report');
    }).fail(() => {
      console.error(arguments);
      toastr.clear();
      toastr.error('Sorry, something went wrong...', 'GitRec report');
    });
  }
  ownerChangeHandler(e) {
    this.setState({ owner: e.target.value });
  }
  repoChangeHandler(e) {
    this.setState({ repo: e.target.value });
  }
  sinceDateChangeHandler(e) {
    this.setState({ sinceDate: e.target.value })
  }
  untilDateChangeHandler(e) {
    this.setState({ untilDate: e.target.value })
  }
  commiterChangeHandler(e) {
    this.setState({ commiter: e.target.value })
  }
  render() {
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
              owner={this.state.owner}
              ownerChangeHandler={this.ownerChangeHandler.bind(this)}
              repo={this.state.repo}
              repoChangeHandler={this.repoChangeHandler.bind(this)}
              />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <SearchFilter
              sinceDate={this.state.sinceDate}
              sinceDateChangeHandler={this.sinceDateChangeHandler.bind(this)}
              untilDate={this.state.untilDate}
              untilDateChangeHandler={this.untilDateChangeHandler.bind(this)}
              commiter={this.state.commiter}
              commiterChangeHandler={this.commiterChangeHandler.bind(this)}
              />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button id="send-mail" onClick={this.sendButtonClickHandler.bind(this)}>
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
