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
import avatar from '../public/static/images/avatar2.jpeg'

const Header = () => {
  const pathname = usePathname()
  return (
    <header className="flex relative gap-4 py-10">
      {pathname === '/' ? (
        <div className="flex flex-1"></div>
      ) : (
        <div className="flex flex-1">
          <Link href={'/'}>
            <Image
              src={avatar}
              alt="avatar"
              width={512}
              height={512}
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      )}

      <div className="hidden sm:flex flex-1 justify-center items-center leading-5 space-x-4 sm:space-x-6 rounded-full bg-white/90 px-3 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
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
      <div className="flex md:flex-1 justify-end leading-5 space-x-4 sm:space-x-6">
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
