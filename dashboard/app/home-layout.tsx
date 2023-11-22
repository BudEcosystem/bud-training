'use client';
import React from 'react';
import { Fragment, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import { Dialog, Menu, Transition } from '@headlessui/react';
import { useTheme } from "next-themes"

import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark
} from '@radix-ui/colors';
import {
  Bars3Icon,
  BellIcon,
  CubeTransparentIcon,
  Cog6ToothIcon,
  TableCellsIcon,
  BoltIcon,
  UserCircleIcon,
  BeakerIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import {
  ArrowPathIcon, ChevronDownIcon, MagnifyingGlassIcon
} from '@heroicons/react/20/solid';
import { Box, Button, Flex } from '@radix-ui/themes';
import { ModeToggle } from './components/mode-toggle';
import Background from './background';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import logoWhite from './assets/images/logoWhite.png';
import logoBlack from './assets/images/logoBlack.png';
const navigation = [
  // { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'Datasets', href: '/datasets', icon: TableCellsIcon, current: false },
  { name: 'Experiments', href: '/pipeline', icon: BeakerIcon, current: false },
  { name: 'Models', href: '/models', icon: CubeTransparentIcon, current: false },
  // { name: 'Agents', href: '/agents', icon: UserCircleIcon, current: false },
  { name: 'Inference', href: '/inference', icon: BoltIcon, current: false },

]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false }
];
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' }
];
const style = {
  normal: {
    background: 'purple'
  },
  hover: {
    background: 'red'
  }
};
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [hover, setHover] = useState(false);
  const goBack = () => {
    console.log("click")
    window.history.go(-1); return false;
  };
  const theme = useTheme();
  const Logo = theme.theme == 'dark' ? logoWhite : logoBlack;
  console.log(theme, Logo);
  return (
    <>
      <div className="h-screen w-full fixed">
        <header
          className="w-full flex justify-between items-center	px-7"
          style={{ boxShadow: '0 1px var(--gray-a4)' }}
        >
          {/* <header className="w-full shadow-[-0px_1px_rgba(2,2,52,.079)]"> */}
          <div
            className="relative flex flex-col bg-[var(--nav-bg)] rounded-lg px-2 py-2 h-auto z-10"
            style={{ boxShadow: 'var(--shadow-4)' }}
          >
            {/* <ModeToggle /> */}
            <Button
              onClick={goBack}
              variant="solid"
              size="1"
              color="indigo"
              style={{
                background: 'var(--nav-btn-bg-active)',
                border: '0',
                outline: '0',
                boxShadow: 'none',
                padding: '.5em'
              }}
            >
              <ArrowLeftIcon className="h-[1rem] w-[1rem] rounded-xl rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[var(--nav-text)] hover:text-[var(--nav-text)]" />
              <span className="sr-only">Go Back</span>
            </Button>
          </div>
          <div className="sticky top-0 z-40 flex h-14 shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8 justify-center">
            <div className="flex h-14 shrink-0 items-center justify-center logo-wrap ">
              <Image className="h-8 w-auto" src={Logo} alt="Bud" />
              {/* <p>Bud</p> */}
            </div>
            {/* Separator */}
            {/* <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form
                className="relative flex flex-1 opacity-0"
                action="#"
                method="GET"
              >
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
            </div> */}
          </div>
          <div
            className="relative flex flex-col bg-[var(--nav-bg)] rounded-lg px-2 py-2"
            style={{ boxShadow: 'var(--shadow-4)' }}
          >
            <ModeToggle />
          </div>
        </header>
        <Flex
          direction="row"
          gap="0"
          position="relative"
          height="100%"
          width="100%"
          justify="between"
          className="h-screen"
        >
          <Box height="100%" position="relative" className="w-1/12 h-screen">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex w-full h-full grow flex-col justify-center items-center overflow-y-auto box-border pb-4 -mt-14">
              <nav
                className="flex flex-col rounded-lg pl-3 pt-3 py-1  mt-20"
                style={{
                  background: 'var(--nav-bg)',
                  // border: '1px solid rgba(2,2,52,.079',
                  boxShadow: 'var(--shadow-4)'
                }}
              >
                <ul role="list" className="flex flex-col">
                  <li>
                    <ul role="list" className="space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name} className="w-11 h-11 relative">
                          <a
                            href={item.href}
                            className={classNames(
                              pathname === item.href
                                ? 'bg-[var(--nav-btn-bg-active)]'
                                : 'text-[var(--nav-text)] hover:text-[var(--nav-text)] hover:bg-[var(--nav-btn-bg-active)] hover:fixed mt-0 ml-0 hover:text-[var(--nav-text)] z-10 hover:w-auto hover:rounded-2xl',
                              'w-11 overflow-hidden flex gap-x-4 rounded-md px-3 py-2 text-sm leading-5 flex items-center'
                            )}
                          >
                            <item.icon
                              className={classNames(
                                pathname === item.href
                                  ? 'text-[var(--nav-text)]'
                                  : 'text-[var(--nav-text)] group-hover:text-[var(--nav-text)]',
                                'h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li>
                    <ul role="list" className="">
                      <li className="relative w-11 h-11">
                        <a
                          href="#"
                          className="w-11 px-3 overflow-hidden flex gap-x-4 text-sm leading-6 text-[var(--nav-text)] group hover:bg-[var(--nav-btn-bg-active)] rounded-2xl py-2 text-sm leading-5 items-center hover:fixed mt-0 ml-0 hover:text-[var(--nav-text)] z-10 hover:w-auto  hover:rounded-2xl"
                        >
                          <Cog6ToothIcon
                            className="h-5 w-5 shrink-0 text-[var(--nav-text)] group-hover:text-[var(--nav-text)]"
                            aria-hidden="true"
                          />
                          Settings
                        </a>
                      </li>
                      <li className="relative w-11 h-11">
                        <button
                          type="button"
                          className="w-11 px-3 overflow-hidden flex gap-x-4 text-sm leading-6 text-[var(--nav-text)] group hover:bg-[var(--nav-btn-bg-active)] rounded-2xl py-2 text-sm leading-5 items-center hover:fixed mt-0 ml-0 hover:text-[var(--nav-text)] z-10 hover:w-auto  hover:rounded-2xl"
                        >
                          <BellIcon
                            className="h-5 w-5 shrink-0 text-[var(--nav-text)] group-hover:text-[var(--nav-text)]"
                            aria-hidden="true"
                          />
                          {/* <span className="sr-only">View notifications</span> */}
                          Notifications
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="flex w-14 px-1 overflow-hidden gap-x-4 lg:gap-x-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <Menu.Button className=" flex items-center pl-.5">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full bg-gray-50"
                        src="https://qph.cf2.quoracdn.net/main-thumb-66203696-200-ngyspigvbvkorrgaccfjowxkfgujputv.jpeg"
                        alt=""
                      />
                      <span className="hidden lg:flex lg:items-center">
                        <span
                          className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                          aria-hidden="true"
                        >
                          Jithin VG
                        </span>
                        <ChevronDownIcon
                          className="ml-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="fixed block mr-12 z-10 mx-10 -my-14 w-32 origin-top-right rounded-md bg-white py-2 shadow ring-1 ring-gray-900/5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-50' : '',
                                  'block px-3 py-1 text-sm leading-6 text-gray-900'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </nav>
            </div>
          </Box>
          <Box
            height="100%"
            position="relative"
            className="w-11/12 rounded-tl-3xl modelsWrap"
          >
            <main className="py-10 px-8 h-full">{children}</main>
          </Box>
        </Flex>
      </div>
    </>
  );
}
