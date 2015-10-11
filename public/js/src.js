import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'react-bootstrap';
import toastr from 'toastr';
import req from 'superagent-bluebird-promise';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: '',
      repo: ''
    };
  }
  sendButtonClickHandler() {
    console.log(this.state.owner, this.state.repo)
    if(!this.state.owner || !this.state.repo) {
      toastr.error('please fill your repository information', 'ERROR');
      return false;
    }
    let url = '/mail/' + this.state.owner + '/' + this.state.repo;
    req.get(url)
       .send()
       .then(() =>{
         toastr.info('GitRec report was successfully sent', 'GitRec report');
       });
  }
  ownerChangeHandler(e) {
    this.setState({ owner: e.target.value });
  }
  repoChangeHandler(e) {
    this.setState({ repo: e.target.value });
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
