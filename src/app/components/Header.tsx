import Link from 'next/link';
import Nav from '@/app/components/Nav';
import { Menu, X } from 'lucide-react';


export default async function Header() {
 
  const nav = [
    { name: 'Privacy Policy', link: 'https://privacy.artijo.com' },
    { name: 'About', link: 'https://about.artijo.com' },
  ];

  return (
    <header className='fixed top-0 z-50 flex w-full flex-wrap md:top-2 md:flex-nowrap md:justify-start md:px-4'>
      <nav
        className='relative mx-2 mt-3 min-h-11 w-full rounded-[22px] bg-white/90 px-5 shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur dark:bg-slate-700/80 md:mx-auto md:flex md:max-w-max md:items-center md:justify-between md:rounded-full md:px-6 md:py-0'
        aria-label='Global'
      >
        <div className='flex min-h-11 items-center justify-between'>
          <Link
            className='flex items-center gap-2 font-bold dark:text-white md:text-xl'
            href='/'
            aria-label='Brand'
          >
            <h1 className='w-max text-lg'>ARTIJO • BLOG</h1>
          </Link>
          <button
            id='navtoggle'
            className='relative h-6 w-6 md:hidden'
            title='Toggle Menu'
          >
            <Menu className='i-open pointer-events-none absolute  top-0 transition-all' />
            <X className='i-close pointer-events-none absolute top-0 opacity-0 transition-all' />
          </button>
        </div>
        <div
          id='nav'
          className='duration-600 max-h-0 grow basis-full overflow-hidden transition-all md:block md:max-h-none'
        >
          <div className='mb-4 mt-2 flex flex-col gap-x-0 gap-y-4 md:my-0 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:pl-8 '>
            <Nav nav={nav} />
          </div>
        </div>
      </nav>
    </header>
  );
}