// Because event handlers aren't bound to "this," they have to be manually bound using .bind(this). This is not the case with arrow functions, if using the latest presets and plugins for Babel, namely @babel/preset-env, @babel/preset-react, and the @babel/plugin-proposal-class-properties. Doing it this way, instead of every time we call this function--assuming more than once--ensures that the method is bound to the proper context, i.e., this.

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// While classes are on their way out, as React trends toward functional components with hooks, class components are still supported in React, though it is not recommended to use them outside of legacy code.
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: props.options
    }
  }

  /* Lifecycle methods are only available in class-based components (meaning that they're also obsolete). */

  // Fires after the component mounts.
  componentDidMount() {
    try {
      const storedOptions = localStorage.getItem('options');
  
      if (storedOptions) {
        this.setState({ options: JSON.parse(storedOptions) });
      } else {
        this.setState({ options: [] })
      }
    } catch (err) {}
  }

  // Fires after the component's state is updated and the component is rerendered.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  addOption(option) {
    if (!option) {
      return 'Enter a valid option.';
    } else if (this.state.options.indexOf(option) !== -1) {
      return 'This option already exists.';
    } else {
      this.setState(prevState => {
        return {
          options: prevState.options.concat(option)
        }
      });
    }
  }

  removeOption(option) {    
    if (option) this.setState(prevState => ({ options: prevState.options.filter(value => value !== option) }));
  }

  removeAll() { this.setState({ options: [] }); }

  handlePick() {
    const randoNum = Math.floor(Math.random() * this.state.options.length);
    const randoChoice = this.state.options[randoNum];

    if (randoChoice) alert(`Do this: ${randoChoice}`);
  }

  render() {
    return (
      <div className='indecision-app'>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        {this.state.options.length > 0 && <Action options={this.state.options} handlePick={this.handlePick} />}
        <Options options={this.state.options} addOption={this.addOption} removeOption={this.removeOption} removeAll={this.removeAll} />
      </div>
    );
  }
}

// This is an example of a stateless functional component. With the introduction of hooks in React 16, functional components not only became stateful, but also the preferred method for defining a component, becaue of their concise code, the fact that there's no need to bind "this", their faster performance (less overhead), and the relative ease of testing them.
const Header = ({ title = 'Indecision App', subtitle = 'Let a Computer Decide' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick}>What Should I Do?</button>
    </div>
  );
}

const Options = props => {
  return (
    <div>
      {props.options.length ? 
      (
        props.options.map((option, key) => (
          <Option 
            key={key} 
            option={option} 
            removeOption={props.removeOption} 
          />
        ))
      )
      :
      (
        <p>Add an option to get started.</p>
      )}
      <AddOption addOption={props.addOption} />
      {props.options.length > 0 && <RemoveAll removeAll={props.removeAll} />}
    </div>
  );
}

const Option = props => {
  return (
    <div style={{ display:'flex', alignItems:'flex-end'}}>
      <p style={{ margin:'0'}}>
        {props.option}
      </p>
      <RemoveOption removeOption={props.removeOption} option={props.option} />
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      option: '',
      error: undefined
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);
    this.setState({ option: '' });

    if (error) {
      this.setState({ error });
    } else {
      this.setState({ error: undefined });
    }
  }

  handleChange(e) {
    const inputValue = e.target.value;
    this.setState({ option: inputValue });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='option' value={this.state.option} onChange={this.handleChange}/>
          <button>Add an Option</button>
        </form>
        {this.state.error && <div><p>Error: {this.state.error}</p></div>}
      </div>
    )
  }
}

const RemoveOption = props => {
  return (
    <p style={{ cursor:'pointer', margin:'0' }} onClick={() => props.removeOption(props.option)}>Remove</p>
  );
}

const RemoveAll = props => {
  return(
    <button onClick={props.removeAll}>Remove All</button>
  );
}


root.render(<IndecisionApp options={['Thing One', 'Thing Two']} />);
