import { fetchTours } from './types';
import { useQuery } from '@tanstack/react-query';

function Component() {
  const { isPending, isError, error, data: tours} = useQuery({
    queryKey: ['tours'],
    queryFn: fetchTours,
  });

  if (isPending) return <h2>Loading...</h2>;
  if (isError) return error as Error ? <h2>{error.message}</h2>: <h2>Something went wrong</h2>;
  if (!tours || tours.length === 0) return <h2>No tours available</h2>;
  return (
    <section>
      <h2>Available Tours</h2>
      <div className="tours">
        {tours.map((tour) => {
          const { id, name, info, image, price } = tour;
          return (
            <article key={id} className="single-tour">
              <img src={image} alt={name} />
              <footer>
                <div className="tour-info">
                  <h4>{name}</h4>
                  <h4 className="tour-price">${price}</h4>
                </div>
                <p>{info}</p>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  )
}

export default Component;