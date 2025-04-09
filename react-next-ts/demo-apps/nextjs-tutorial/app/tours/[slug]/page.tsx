import Image from 'next/image';

export default async function PageTemplate({ searchParams,}: { params: { slug: string }; searchParams: { [key: string]: string }}) {
  const { name, info, image, price } = await searchParams;

  return (
    <div>
      <h2>{name}</h2>
      <p>{info}</p>
      <p>Price: {price}</p>
      {image && (
        <Image
          src={image}
          alt={`Image of ${name}`}
          width={300}
          height={300}
          className='w-full h-auto'
          priority
        />
      )}
    </div>
  );
}