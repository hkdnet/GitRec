const React = require('react');
const ReactDom = require('react-dom');

class Screen extends React.Component {
  render() {
    return (
      <div className="screen">
      </div>
    );
  }
}
ReactDom.render(
  <Screen />,
  document.getElementById('content')
);
