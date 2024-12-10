import React from 'react';

export default class AddOption extends React.Component {
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
          <button className='button'>Add an Option</button>
        </form>
        {this.state.error && <div><p>Error: {this.state.error}</p></div>}
      </div>
    )
  }
}
