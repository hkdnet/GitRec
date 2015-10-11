import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'react-bootstrap';

class Screen extends React.Component {
  sendButtonClickHandler() {
    console.log('hello')
  }
  render() {
    return (
      <div className="screen">
        <h1 className="title">GitRec</h1>
        <input id="owner" /> / <input id="repo" /><br />
        <Button id="send-mail" onClick={this.sendButtonClickHandler}>
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
