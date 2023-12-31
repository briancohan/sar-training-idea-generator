'use client'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Play', href: '/play' },
  { name: 'Explore Topics', href: '/explore' },
]

function isActiveRouteOrSubroute(pathname: string, href: string): boolean {
  if (href === '/' && pathname !== '/') return false
  return pathname.startsWith(href)
}

export default function NavBar() {
  const pathname = usePathname()

  return (
    <Disclosure
      as='nav'
      className='bg-gradient-to-r to-red-600 from-blue-600 via-orange-600 border-b border-zinc-300 mb-4'>
      {({ open }) => (
        <>
          <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block w-6 h-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block w-6 h-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsx({
                          'text-zinc-600 bg-gray-300': isActiveRouteOrSubroute(pathname, item.href),
                          'bg-white hover:text-zinc-800': !isActiveRouteOrSubroute(pathname, item.href),
                          'rounded-md px-3 py-2 text-sm font-medium': true,
                        })}
                        aria-current={isActiveRouteOrSubroute(pathname, item.href) ? 'page' : undefined}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={clsx({
                    'text-zinc-600 bg-gray-300': isActiveRouteOrSubroute(pathname, item.href),
                    'bg-white hover:text-zinc-800': !isActiveRouteOrSubroute(pathname, item.href),
                    'block rounded-md px-3 py-2 text-base font-medium': true,
                  })}
                  aria-current={isActiveRouteOrSubroute(pathname, item.href) ? 'page' : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
