const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const user = {
  username: 'Nate',
  age: 47,
  location: 'Leavenworth, WA'
};
const appInfo = {
  title: 'Indecision App',
  subtitle: 'Apples or Oranges?',
  author: 'Nate Cox',
  options: []
}

const makeDecision = () => {
  const randoNum = Math.floor(Math.random() * appInfo.options.length);
  const option = appInfo.options[randoNum];

  alert(option);
};

const handleSubmit = event => {
  event.preventDefault();

  const option = event.target.children.option.value;

  if (option) {
    appInfo.options.push(option);
    event.target.children.option.value = '';
    renderComponent();
  }
};

const handleDelete = key => {
  if (key || key === 0) appInfo.options.splice(key, 1);
  else appInfo.options = [];

  renderComponent();
};

const renderComponent = () => {
  const templateTitle = (
    <div>
      <h1>{appInfo.title}</h1>
      {appInfo.subtitle && <h2>{appInfo.subtitle}</h2>}
      <button disabled={!appInfo.options.length} onClick={makeDecision}>What Should I Do?</button>
      <button onClick={() => handleDelete()}>Remove All Options</button>
      <ol>Options:
        {appInfo.options.map((option, key) => 
          <div key={key} style={{display:'flex'}}>
            <li>{option}</li>
            <span style={{padding:'0 1rem', cursor:'pointer'}} onClick={() => handleDelete(key)}>X</span>
          </div>
        )}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );

  root.render(templateTitle);
};

renderComponent();