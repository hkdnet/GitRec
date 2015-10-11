'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'react-bootstrap';
import toastr from 'toastr';
import req from 'superagent-bluebird-promise';
import dateFormat from 'dateformat'

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: '',
      repo: '',
      sinceDate: dateFormat(new Date(), 'yyyy-mm-dd'),
      untilDate: dateFormat(new Date(), 'yyyy-mm-dd')
    };
  }
  sendButtonClickHandler() {
    console.log(this.state.owner, this.state.repo)
    if(!this.state.owner || !this.state.repo) {
      toastr.error('please fill your repository information', 'ERROR');
      return false;
    }
    let url = '/mail/' + this.state.owner + '/' + this.state.repo;
    toastr.info('sending...', 'INFO');
    req.get(url)
       .send()
       .then(() =>{
         toastr.clear();
         toastr.info('GitRec report was successfully sent', 'GitRec report');
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
  render() {
    return (
      <div className="screen">
        <h1 className="title">GitRec</h1>
        <div>
          <input id="owner" defaultValue={this.state.owner}
            onChange={this.ownerChangeHandler.bind(this)}
            placeholder="owner" />
          <span>/</span>
          <input id="repo" defaultValue={this.state.repo}
            onChange={this.repoChangeHandler.bind(this)}
            placeholder="repo" />
        </div>
        <div>
          <input id="since_date" type="date"
            defaultValue={this.state.sinceDate}
            onChange={this.sinceDateChangeHandler.bind(this)} />
          <span>〜</span>
          <input id="until_date" type="date"
            defaultValue={this.state.untilDate}
            onChange={this.untilDateChangeHandler.bind(this)} />
        </div>
        <Button id="send-mail" onClick={this.sendButtonClickHandler.bind(this)}>
          send GitRec report
        </Button>
      </div>
    );
  }
}
ReactDom.render(
  <Screen />,
  document.getElementById('content')
);
