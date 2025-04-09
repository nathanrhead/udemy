import Link from 'next/link';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

export default async function Tours() {
  // await new Promise(resolve => setTimeout(resolve, 3000)); // Artifical pause to mimic latency.
  const url = 'https://www.course-api.com/react-tours-project';
  const data: Tour[] = await (await fetch(url)).json(); 
    
  return (
    <section className='text-3xl mb-4'>
      {data && data.length > 0 && (
        data.map(entry => (
          <Link 
            key={entry.id} 
            href={{
              pathname: `/tours/${entry.id}`,
              query: { ...entry }
            }} 
            className='block hover:text-blue-500'
          >
            {entry.name}
          </Link>
        ))
      )}
    </section>
  )
}