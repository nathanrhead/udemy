'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: 'render',
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Let a Computer Decide';
      var options = ['apples', 'oranges', 'blues'];

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { options: options }),
        React.createElement(Options, { options: options }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    _classCallCheck(this, Action);

    var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

    _this3.handleClick = _this3.handleClick.bind(_this3); // Because event handlers aren't bound to "this," they have to be manually bound using .bind(this). This is not the case with arrow functions, if using the latest presets and plugins for Babel, namely @babel/preset-env, @babel/preset-react, and the @babel/plugin-proposal-class-properties. Doing it this way, instead of every time we call this function--assuming more than once--ensures that the method is bound to the proper context, i.e., this.
    return _this3;
  }

  _createClass(Action, [{
    key: 'handleClick',
    value: function handleClick() {
      var randoNum = Math.floor(Math.random() * this.props.options.length);
      var randoChoice = this.props.options[randoNum];

      alert(randoChoice);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.handleClick },
          'What Should I Do?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'removeAll',
    value: function removeAll() {}
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.removeAll.bind(this) },
          'Remove All'
        ),
        this.props.options && this.props.options.map(function (option, key) {
          return React.createElement(Option, { key: key, option: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'p',
        null,
        this.props.option
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'addOption',
    value: function addOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();

      if (option) alert(option);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.addOption.bind(this) },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
          'button',
          null,
          'Add Option'
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

root.render(React.createElement(IndecisionApp, null));
