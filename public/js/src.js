import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'react-bootstrap';
import toastr from 'toastr'

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
      toastr.error('please fill your repository information', 'ERROR')
    }
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

/*
var sendMailButton = document.getElementById('send-mail');
var valGetter = function(input) {
  return input && input.value;
};
sendMailButton.addEventListener('click', function(e) {
  var owner = valGetter(document.getElementById('owner')),
      repo = valGetter(document.getElementById('repo'));

  if(!owner || !repo) {
    alert('please fill your information.')
    return false;
  }
  e.target.innerText = 'sending...'
  location.href = '/mail/' + owner + '/' + repo;
});
*/
