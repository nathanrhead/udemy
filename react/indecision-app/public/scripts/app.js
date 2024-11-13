'use strict';

var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

var user = {
  username: 'Nate',
  age: 47,
  location: 'Leavenworth, WA'
};
var appInfo = {
  title: 'Indecision App',
  subtitle: 'Apples or Oranges?',
  author: 'Nate Cox',
  options: []
};

var makeDecision = function makeDecision() {
  var randoNum = Math.floor(Math.random() * appInfo.options.length);
  var option = appInfo.options[randoNum];

  alert(option);
};

var handleSubmit = function handleSubmit(event) {
  event.preventDefault();

  var option = event.target.children.option.value;

  if (option) {
    appInfo.options.push(option);
    event.target.children.option.value = '';
    renderComponent();
  }
};

var handleDelete = function handleDelete(key) {
  if (key || key === 0) appInfo.options.splice(key, 1);else appInfo.options = [];

  renderComponent();
};

var renderComponent = function renderComponent() {
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
      'button',
      { disabled: !appInfo.options.length, onClick: makeDecision },
      'What Should I Do?'
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          return handleDelete();
        } },
      'Remove All Options'
    ),
    React.createElement(
      'ol',
      null,
      'Options:',
      appInfo.options.map(function (option, key) {
        return React.createElement(
          'div',
          { key: key, style: { display: 'flex' } },
          React.createElement(
            'li',
            null,
            option
          ),
          React.createElement(
            'span',
            { style: { padding: '0 1rem', cursor: 'pointer' }, onClick: function onClick() {
                return handleDelete(key);
              } },
            'X'
          )
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  root.render(templateTitle);
};

renderComponent();
