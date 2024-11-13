'use strict';

var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);
var show = false;

var render = function render() {
  var details = 'Ian wuz \'ere.';

  var handleClick = function handleClick() {
    show = !show;
    render();
  };

  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: handleClick },
      !show ? 'Show Details' : 'Hide Details'
    ),
    show && React.createElement(
      'p',
      null,
      details
    )
  );

  root.render(jsx);
};

render();
