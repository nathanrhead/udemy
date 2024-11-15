const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { 
      show: false,
      details: 'Ian wuz \'ere.'
    }
  }

  handleClick() { this.setState({show: !this.state.show }); }
  
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>  
        <button onClick={this.handleClick}>{!this.state.show ? 'Show Details' : 'Hide Details'}</button>
        {this.state.show && <p>{this.state.details}</p>}
      </div>
    );
  }
}

root.render(<VisibilityToggle />);
