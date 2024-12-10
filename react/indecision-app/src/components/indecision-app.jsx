import React from 'react';
import Header from './header';
import Action from './action';
import Options from './options';
import OptionModal from './option-modal';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleClearSelected = this.handleClearSelected.bind(this);
    this.state = {
      options: props.options,
      selectedOption: undefined
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
    if (prevState?.options?.length !== this.state?.options?.length) {
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
    const randoNum = Math.floor(Math.random() * this.state.options?.length);
    const randoChoice = this.state.options[randoNum];

    if (randoChoice) this.setState({ selectedOption: randoChoice });
  }

  handleClearSelected() { this.setState({ selectedOption: undefined }); }
  
  render() {   
    return (
      <div className='indecision-app'>
        <Header 
          title={this.state.title} 
          subtitle={this.state.subtitle} 
        />
        <div className='container'>
          {
            this.state.options && this.state.options.length > 0 && 
              <Action 
                options={this.state.options} 
                handlePick={this.handlePick} 
              />
          }
          <Options 
            options={this.state.options} 
            addOption={this.addOption} 
            removeOption={this.removeOption} 
            removeAll={this.removeAll} 
          />
        </div>
        <OptionModal close={this.handleClearSelected} selectedOption={this.state.selectedOption} />
      </div>
    );
  }
}
