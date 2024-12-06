'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Because event handlers aren't bound to "this," they have to be manually bound using .bind(this). This is not the case with arrow functions, if using the latest presets and plugins for Babel, namely @babel/preset-env, @babel/preset-react, and the @babel/plugin-proposal-class-properties. Doing it this way, instead of every time we call this function--assuming more than once--ensures that the method is bound to the proper context, i.e., this.

var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

// While classes are on their way out, as React trends toward functional components with hooks, class components are still supported in React, though it is not recommended to use them outside of legacy code.

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.addOption = _this.addOption.bind(_this);
    _this.removeOption = _this.removeOption.bind(_this);
    _this.removeAll = _this.removeAll.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  /* Lifecycle methods are only available in class-based components (meaning that they're also obsolete). */

  // Fires after the component mounts.


  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var storedOptions = localStorage.getItem('options');

        if (storedOptions) {
          this.setState({ options: JSON.parse(storedOptions) });
        } else {
          this.setState({ options: [] });
        }
      } catch (err) {}
    }

    // Fires after the component's state is updated and the component is rerendered.

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'addOption',
    value: function addOption(option) {
      if (!option) {
        return 'Enter a valid option.';
      } else if (this.state.options.indexOf(option) !== -1) {
        return 'This option already exists.';
      } else {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat(option)
          };
        });
      }
    }
  }, {
    key: 'removeOption',
    value: function removeOption(option) {
      if (option) this.setState(function (prevState) {
        return { options: prevState.options.filter(function (value) {
            return value !== option;
          }) };
      });
    }
  }, {
    key: 'removeAll',
    value: function removeAll() {
      this.setState({ options: [] });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randoNum = Math.floor(Math.random() * this.state.options.length);
      var randoChoice = this.state.options[randoNum];

      if (randoChoice) alert('Do this: ' + randoChoice);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'indecision-app' },
        React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
        this.state.options.length > 0 && React.createElement(Action, { options: this.state.options, handlePick: this.handlePick }),
        React.createElement(Options, { options: this.state.options, addOption: this.addOption, removeOption: this.removeOption, removeAll: this.removeAll })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

// This is an example of a stateless functional component. With the introduction of hooks in React 16, functional components not only became stateful, but also the preferred method for defining a component, becaue of their concise code, the fact that there's no need to bind "this", their faster performance (less overhead), and the relative ease of testing them.


var Header = function Header(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? 'Indecision App' : _ref$title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === undefined ? 'Let a Computer Decide' : _ref$subtitle;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      title
    ),
    React.createElement(
      'h2',
      null,
      subtitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick },
      'What Should I Do?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    props.options.length ? props.options.map(function (option, key) {
      return React.createElement(Option, {
        key: key,
        option: option,
        removeOption: props.removeOption
      });
    }) : React.createElement(
      'p',
      null,
      'Add an option to get started.'
    ),
    React.createElement(AddOption, { addOption: props.addOption }),
    props.options.length > 0 && React.createElement(RemoveAll, { removeAll: props.removeAll })
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    { style: { display: 'flex', alignItems: 'flex-end' } },
    React.createElement(
      'p',
      { style: { margin: '0' } },
      props.option
    ),
    React.createElement(RemoveOption, { removeOption: props.removeOption, option: props.option })
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    _this2.handleChange = _this2.handleChange.bind(_this2);
    _this2.state = {
      option: '',
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.addOption(option);
      this.setState({ option: '' });

      if (error) {
        this.setState({ error: error });
      } else {
        this.setState({ error: undefined });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var inputValue = e.target.value;
      this.setState({ option: inputValue });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement('input', { type: 'text', name: 'option', value: this.state.option, onChange: this.handleChange }),
          React.createElement(
            'button',
            null,
            'Add an Option'
          )
        ),
        this.state.error && React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            'Error: ',
            this.state.error
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var RemoveOption = function RemoveOption(props) {
  return React.createElement(
    'p',
    { style: { cursor: 'pointer', margin: '0' }, onClick: function onClick() {
        return props.removeOption(props.option);
      } },
    'Remove'
  );
};

var RemoveAll = function RemoveAll(props) {
  return React.createElement(
    'button',
    { onClick: props.removeAll },
    'Remove All'
  );
};

root.render(React.createElement(IndecisionApp, { options: ['Thing One', 'Thing Two'] }));
