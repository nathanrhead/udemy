'use strict';

var user = {
  // username: 'Nate',
  age: 47,
  location: 'Leavenworth, WA'
};
var appInfo = {
  title: 'Indecision App',
  subtitle: 'Apples or Oranges?',
  author: 'Nate Cox'
  // options: ['Orange', 'Four']
};

var templateUser = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.username ? user.username : 'Anonymous'
  ),
  user.age && user.age > 40 && React.createElement(
    'p',
    null,
    'Age: Medium Well'
  ),
  getLocation(user.location)
);

var templateTitle = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appInfo.title
  ),
  appInfo.subtitle && React.createElement(
    'h2',
    null,
    appInfo.subtitle
  ),
  React.createElement(
    'h3',
    null,
    'by ',
    appInfo.author
  ),
  appInfo.options && appInfo.options.length ? React.createElement(
    'ul',
    null,
    'Options:',
    appInfo.options.map(function (option, key) {
      return React.createElement(
        'li',
        { key: key },
        'option'
      );
    })
  ) : React.createElement(
    'p',
    null,
    'There are no options to choose from.'
  )
);

function getLocation(location) {
  return location ? React.createElement(
    'p',
    null,
    'Location: ',
    location
  ) : null;
}

var appRoot = document.getElementById('app');

var count = 0;
var renderCounterApp = function renderCounterApp() {
  var addOne = function addOne() {
    count++;
    renderCounterApp();
  };
  var minusOne = function minusOne() {
    count--;
    renderCounterApp();
  };
  var resetCounter = function resetCounter() {
    count = 0;
    renderCounterApp();
  };

  var templateCounter = React.createElement(
    'div',
    null,
    React.createElement(
      'h3',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: resetCounter },
      'Reset'
    )
  );

  ReactDOM.render(templateCounter, appRoot);
};

renderCounterApp();
