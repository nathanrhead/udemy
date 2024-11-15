const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Let a Computer Decide';
    const options = ['apples', 'oranges', 'blues'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action options={options} />
        <Options options={options} />
        <AddOption />
      </div>
    )
  } 
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); // Because event handlers aren't bound to "this," they have to be manually bound using .bind(this). This is not the case with arrow functions, if using the latest presets and plugins for Babel, namely @babel/preset-env, @babel/preset-react, and the @babel/plugin-proposal-class-properties. Doing it this way, instead of every time we call this function--assuming more than once--ensures that the method is bound to the proper context, i.e., this.
  }

  handleClick() { 
    const randoNum = Math.floor(Math.random() * this.props.options.length);
    const randoChoice = this.props.options[randoNum];

    alert(randoChoice);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>What Should I Do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  removeAll() {}

  render() {
    return (
      <div>
        <button onClick={this.removeAll.bind(this)}>Remove All</button>
        {this.props.options && (
          this.props.options.map((option, key) => <Option key={key} option={option} />)
        )}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <p>
        {this.props.option}
      </p>
    )
  }
}

class AddOption extends React.Component {
  addOption(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();

    if (option) alert(option);
  }

  render() {
    return (
      <form onSubmit={this.addOption.bind(this)}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    )
  }
}


root.render(<IndecisionApp />);
