"use client";

import Image from "next/image";
import Link from "next/link";
import profileDefault from "@/assets/images/profile.png";
import { NavItemProps } from "@/interfaces/navbar";
import NavItem from "@/components/navbar/nav-item";
import { FaBars, FaGoogle, FaRegBell } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi2";

export const Navbar = () => {
  const pathname = usePathname();

  // Dropdown states
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Navbar items
  const navItems: NavItemProps[] = [
    { href: "/", text: "Home", selected: pathname === "/" },
    {
      href: "/properties",
      text: "Properties",
      selected: pathname === "/properties",
    },
    {
      href: "/properties/add",
      text: "Add Property",
      selected: pathname === "/properties/add",
      show: isLoggedIn,
    },
  ];

  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <FaBars className="block h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex flex-shrink-0 items-center" href="/">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
                <HiHome className="text-blue-700 h-8 w-8" />
              </div>
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                PropertyPulse
              </span>
            </Link>

            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2">
                {navItems.map((item) => (
                  <NavItem.Desktop
                    key={item.href}
                    href={item.href}
                    text={item.text}
                    selected={item.selected}
                    show={item.show}
                  />
                ))}
              </div>
            </div>
          </div>

          {!isLoggedIn && (
            <div className="hidden md:block md:ml-6">
              <div className="flex items-center">
                <button
                  className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  onClick={() => setIsLoggedIn((prev) => !prev)}
                >
                  <FaGoogle className="mr-2" />
                  <span>Login or Register</span>
                </button>
              </div>
            </div>
          )}

          {isLoggedIn && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <Link href="/messages" className="relative group">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <FaRegBell className="h-6 w-6" />
                </button>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  2
                </span>
              </Link>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setProfileMenuOpen((prev) => !prev)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <Image
                      src={profileDefault}
                      alt="Profile"
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full"
                    />
                  </button>
                </div>

                {profileMenuOpen && (
                  <div
                    id="user-menu"
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </Link>
                    <Link
                      href="/properties/saved"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-1"
                    >
                      Saved Properties
                    </Link>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.map((item) => (
              <NavItem.Mobile
                key={item.href}
                href={item.href}
                text={item.text}
                selected={item.selected}
                show={item.show}
              />
            ))}
            {!isLoggedIn && (
              <button
                className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4"
                onClick={() => setIsLoggedIn((prev) => !prev)}
              >
                <FaGoogle className="mr-2" />
                <span>Login or Register</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
