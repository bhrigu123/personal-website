'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/b.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex relative gap-4 py-10">
      {pathname === '/'
        ? <div className='flex flex-1'></div>
        : 
        <div className='flex flex-1'><Link
          href={'/'}>
          Home
        </Link></div>
      }

      <div className="flex flex-1 justify-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}

      </div>
      <div className='flex md:flex-1 justify-end leading-5 space-x-4 sm:space-x-6'>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
