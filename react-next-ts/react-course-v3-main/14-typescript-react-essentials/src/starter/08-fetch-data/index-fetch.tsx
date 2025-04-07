import { useState, useEffect } from 'react';
import { Tour, tourSchema } from './types';


function Component() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const url = 'https://www.course-api.com/react-tours-project';

useEffect(() => {
  setLoading(true);
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('Error fetching data');
      return res.json();
    })
    .then(data => {
      const result = tourSchema.array().safeParse(data);

      if (!result.success) {
        const message = result.error.errors.map(error => error.message).join(', ');
        throw new Error(message);
      }

      setTours(result.data);
    })
    .catch(err => {
      const message = err instanceof Error ? err.message : 'There was an error.';
      setError(message);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h2 className='mb-1'>Tours</h2>
      {tours.map(tour => (
        <div key={tour.id}>
          <p>{tour.name}</p>
          <p>{tour.info}</p>
          <p>{tour.price}</p>
          <img src={tour.image} alt={tour.name} />
          <hr></hr>
        </div>
      ))}
    </div>
  );
}
export default Component;
