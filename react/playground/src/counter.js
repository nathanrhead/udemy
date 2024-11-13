// A basic example of how React works, though behind the scenes it is much more efficient than this. React only changes what has changed, without rerendering the whole component, using a "virtual DOM" algorithm. In the case below, when a user clicks on the +1 button, only the number of the counter changes, and nothing else, not even the element in which the count is rendered.
const appRoot = document.getElementById('root');
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
  
  ReactDOM.render(templateCounter, appRoot);
};

renderCounterApp();