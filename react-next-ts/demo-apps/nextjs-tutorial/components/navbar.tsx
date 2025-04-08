'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavItem } from '@/data/navItems';

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [pathname, setPathname] = useState<string>(usePathname());
  const isActive = (pagename: string) => {
    if (pagename === pathname) return 'text-blue-500';
    else return '';
  };

  return (
    <nav className='flex flex-col items-center justify-end min-h-40 pb-6'>
      <h1 className='text-white text-3xl font-bold'>
        <Link href='/'>Next.JS Tutorial</Link>
      </h1>
      <div className='flex items-center gap-4 border-t-2 border-white'>
        {items.map(item => (
          <Link 
            key={item.id} 
            href={item.url} 
            className={`${isActive(item.url)} text-lg font-semibold `}
            onClick={() => setPathname(item.url)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;