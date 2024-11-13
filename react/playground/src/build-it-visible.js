const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
let show = false;

const render = () => {
  const details = 'Ian wuz \'ere.';

  const handleClick = () => { 
    show = !show;
    render();
  };

  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>  
      <button onClick={handleClick}>{!show ? 'Show Details' : 'Hide Details'}</button>
      {show && <p>{details}</p>}
    </div>
  );

  root.render(jsx);
};

render();