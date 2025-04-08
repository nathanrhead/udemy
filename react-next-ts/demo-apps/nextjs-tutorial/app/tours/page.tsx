import Image from 'next/image'

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

export default async function Tours() {
  const url = 'https://www.course-api.com/react-tours-project';
  const data: Tour[] = await (await fetch(url)).json(); 
    
  return (
    <section className='text-3xl mb-4'>
      {data && data.length > 0 && (
        data.map(entry => (
          <div key={entry.id}>
            <h2>{entry.name}</h2>
            <p>{entry.info}</p>
            <Image 
              src={entry.image} 
              alt='images of the destination' 
              width={500} 
              height={300} 
              layout="responsive"
            />         
            </div>
        ))
      )}
    </section>
  )
}