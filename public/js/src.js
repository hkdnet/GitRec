'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Button, Grid, Row, Col, Label } from 'react-bootstrap';
import toastr from 'toastr';
import dateFormat from 'dateformat';
import $ from 'jquery'
import GitHubRepository from './public/js/gitHubRepository.js'

class SearchFilter extends React.Component {
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
class Screen extends React.Component {
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
            <h2>How to Use</h2>
            <section>
              <ul>
                <li>GitHubレポジトリを指定します。 例: hkdnet/GitRec</li>
                <li>日付フィルタを指定します。デフォルトは直近1週間です。</li>
                <li>コミッタフィルタを指定します。ない場合はレポジトリの全ログを取得します。</li>
                <li>送信ボタンをクリックします。</li>
              </ul>
            </section>
          </Col>
        </Row>
      </Grid>
    );
  }
}
ReactDom.render(
  <Screen />,
  document.getElementById('content')
);
