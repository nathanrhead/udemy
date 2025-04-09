import Link from 'next/link';
import Image from 'next/image';

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
    <section className='text-3xl mb-4 grid md:grid-cols-2 gap-8'>
      {data && data.length > 0 && (
        data.map(entry => (
          <Link 
            key={entry.id} 
            href={{
              pathname: `/tours/${entry.id}`,
              query: { ...entry }
            }} 
            className='block hover:text-blue-500 text-lg mb-10'
          >
            <div className='relative h-48 w-full mb-2'>
              <Image 
                src={entry.image}
                alt={`Image of ${entry.name}`}
                sizes='33vw'
                fill
                priority
                className='object-cover rounded'
              />
            </div>
            <h2>{entry.name}</h2>
          </Link>
        ))
      )}
    </section>
  )
}