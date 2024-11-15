'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// A basic example of how React works, though behind the scenes it is much more efficient than this. React only changes what has changed, without rerendering the whole component, using a "virtual DOM" algorithm. In the case below, when a user clicks on the +1 button, only the number of the counter changes, and nothing else, not even the element in which the count is rendered.
var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

// The original version of the counter app.
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

  root.render(templateCounter);
};

// renderCounterApp();

// The counter app as a React class component.

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.addOne = _this.addOne.bind(_this);
    _this.minusOne = _this.minusOne.bind(_this);
    _this.resetCounter = _this.resetCounter.bind(_this);
    _this.state = { count: 0 };
    return _this;
  }

  _createClass(Counter, [{
    key: 'addOne',
    value: function addOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'minusOne',
    value: function minusOne() {
      this.setState(function (prevState) {
        return { count: prevState.count - 1 };
      });
    }
  }, {
    key: 'resetCounter',
    value: function resetCounter() {
      this.setState(function () {
        return { count: 0 };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'Count: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.addOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.minusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.resetCounter },
          'Reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

root.render(React.createElement(Counter, null));
