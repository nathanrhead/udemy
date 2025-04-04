import { useState, Suspense, lazy } from 'react';

const SlowComponent = lazy(() => import('./SlowComponent'));
const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);

    // slow down CPU
    const newItems = Array.from({ length: 5000 }, (_, index) => {
      return (
        <div key={index}>
          <img src='/vite.svg' alt='' />
        </div>
      );
    });
    setItems(newItems);
  };
  return (
    <section>
      <form className='form'>
        <input
          type='text'
          className='form-input'
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          marginTop: '2rem',
        }}
      >
        {items}
      </div>
      <button className='btn' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && (
        <Suspense
          fallback={
            <div style={{ height: '200px', width: '200px' }}>
              <h4>Loading...</h4>
            </div>
          }
        >
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;
