const user = {
  // username: 'Nate',
  age: 47,
  location: 'Leavenworth, WA'
};
const appInfo = {
  title: 'Indecision App',
  subtitle: 'Apples or Oranges?',
  author: 'Nate Cox',
  // options: ['Orange', 'Four']
}

const templateUser = (
  <div>
    <h1>{user.username ? user.username : 'Anonymous'}</h1>
    {user.age && user.age > 40 && <p>Age: Medium Well</p>}
    {getLocation(user.location)}
  </div>
);

const templateTitle = (
  <div>
    <h1>{appInfo.title}</h1>
    {appInfo.subtitle && <h2>{appInfo.subtitle}</h2>}
    <h3>by {appInfo.author}</h3>
    {appInfo.options && appInfo.options.length ? 
    (
      <ul>Options:
        {appInfo.options.map((option, key) => 
          <li key={key}>option</li>
        )}
      </ul>
    )
    :
    (
      <p>There are no options to choose from.</p>
    )}
  </div>
);

function getLocation(location) {
  return location ?<p>Location: {location}</p> : null;
}


const appRoot = document.getElementById('app');

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