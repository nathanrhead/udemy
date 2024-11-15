// A basic example of how React works, though behind the scenes it is much more efficient than this. React only changes what has changed, without rerendering the whole component, using a "virtual DOM" algorithm. In the case below, when a user clicks on the +1 button, only the number of the counter changes, and nothing else, not even the element in which the count is rendered.
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// The original version of the counter app.
let count = 0;
const renderCounterApp = () => {
  const addOne = () => { 
    count++; 
    renderCounterApp();
  };
  const minusOne = () => { 
    count--; 
    renderCounterApp();
  };
  const resetCounter = () => { 
    count = 0;
    renderCounterApp();
  };

  const templateCounter = (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
  
  root.render(templateCounter);
};

// renderCounterApp();

// The counter app as a React class component.
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.state = { count: 0 };
  }

  addOne() {
    this.setState((prevState) => {
      return { 
        count: prevState.count + 1
      };
    }); 
  }

  minusOne() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }
  resetCounter() {
    this.setState(() => ({ count: 0 }));
  }

  render() {
    return(
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    );
  }
}

root.render(<Counter />);
