import Component from './starter/05-challenge/';

function App() {
  return (
    <main>
      <h2>React & Typescript</h2>
      <h3 style={{ textAlign: 'center' }}>Challenge</h3>
      <Component type='basic' name='Sasha' />
      <Component type='advanced' name='Sasha' email='sasha@sasha.sasha' />
    </main>
  );
}

export default App;
