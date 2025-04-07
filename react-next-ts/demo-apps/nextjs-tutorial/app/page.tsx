import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1 className='text-7xl'>Homepage</h1>
      <Link href='/about'>About</Link>
    </div>
  )
}

export default Home;