import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, PhoneIcon, XIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Documentation", href: "#" },
  { name: "For Sale", href: "#" },
  { name: "About", href: "#" },
  { name: "Community", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  return (
    <div className="z-20 sm:absolute w-full bg-white sm:py-4 py-2">
      <Popover>
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav
                className="relative flex items-center justify-center w-dull"
                aria-label="Global"
              >
                <div className="absolute left-0">
                  {/* <Link href="/contact">
                    <button className="hidden md:block bg-secondary p-2 font-semibold text-tertiary rounded-md px-4">
                      Contact
                    </button>
                  </Link> */}
                  <a href="https://www.google.com/maps/dir//110+Whites+Rd+Mount+Duneed+VIC+3217+Australia/@-38.2317414,144.3232809,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x6ad46cece911d4cd:0x4ac8a0923442541b" target="_blank" rel="noreferrer">
                    <button className="bg-secondary p-2 font-semibold text-tertiary rounded-md">
                      <LocationMarkerIcon className="h-5 w-5" />
                    </button>
                  </a>
                  <a href="tel:+61499795969">
                    <button className="bg-secondary ml-4 p-2 font-semibold text-tertiary rounded-md">
                      <PhoneIcon className="h-5 w-5" />
                    </button>
                  </a>
                </div>
                <div className="absolute right-0 mx-2">
                  <Link href="/contact">
                    <button className="md:block bg-secondary p-2 font-semibold text-tertiary rounded-md px-4">
                      Contact
                    </button>
                  </Link>
                  {/* <Link href="/contact">
                    <button className="md:hidden bg-secondary p-2 font-semibold text-tertiary rounded-md">
                      <PhoneIcon className="h-5 w-5" />
                    </button>
                  </Link> */}
                </div>
                <div className="mt-2">
                  <Image
                    // className="h-8 w-auto sm:h-10"

                    src="/images/dalgona-logo.png"
                    alt=""
                    layout="fixed"
                    height={50}
                    width={150}
                  />
                </div>
                {/* <div className="flex flex-1 items-center justify-between max-w-9/10 md:max-w-7/10">
                  <a
                    href="#"
                    className="hidden md:block font-medium text-tertiary"
                  >
                    For Sale
                  </a>
                  <a
                    href="#"
                    className="hidden md:block font-medium text-tertiary"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="hidden md:block font-medium text-tertiary"
                  >
                    Community
                  </a>
                  <a href="#">
                    <div className="mt-2">
                      <Image
                        // className="h-8 w-auto sm:h-10"

                        src="/images/dalgona-logo.png"
                        alt=""
                        layout="fixed"
                        height={50}
                        width={150}
                      />
                    </div>
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-tertiary">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <a
                    href="#"
                    className="hidden md:block font-medium text-tertiary"
                  >
                    For Sale
                  </a>
                  <a
                    href="#"
                    className="hidden md:block font-medium text-tertiary"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="hidden md:block font-medium text-tertiary"
                  >
                    Community
                  </a>
                </div> */}

                {/* <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <div className="mt-2">
                        <Image
                          // className="h-8 w-auto sm:h-10"

                          src="/images/dalgona-logo.png"
                          alt=""
                          layout="fixed"
                          height={50}
                          width={150}
                        />
                      </div>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-tertiary">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-tertiary"
                    >
                      {item.name}
                    </a>
                  ))}
                </div> */}

                {/* <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                  <span className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </span>
                </div> */}
              </nav>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
              >
                <div className="rounded-lg shadow-md text-secondary ring-1 ring-black ring-opacity-5 overflow-hidden  bg-quaternary">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div className="mt-2">
                      <Image
                        // className="h-8 w-auto sm:h-10"

                        src="/images/dalgona-logo.png"
                        alt=""
                        layout="fixed"
                        height={50}
                        width={150}
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-tertiary">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-semibold text-tertiary hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
