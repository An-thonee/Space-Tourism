import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { NavItem } from "../types/spaceTourism";

const links: NavItem[] = [
  { number: "00", label: "Home", path: "/" },
  { number: "01", label: "Destination", path: "/destination" },
  { number: "02", label: "Crew", path: "/crew" },
  { number: "03", label: "Technology", path: "/technology" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="relative z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-0 lg:pt-10 lg:pl-14 lg:pr-0">
      <NavLink to="/" aria-label="Go to homepage">
        <img
          src="/assets/shared/logo.svg"
          alt="Space Tourism"
          className="h-10 w-10 md:h-12 md:w-12"
        />
      </NavLink>

      <div className="relative hidden h-px flex-1 translate-x-8 bg-white/25 lg:block" />

      <button
        className="md:hidden"
        type="button"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
      >
        <img src="/assets/shared/icon-hamburger.svg" alt="" />
      </button>

      <nav className="hidden bg-white/5 px-12 backdrop-blur-xl md:block lg:px-32">
        <ul className="flex gap-9 font-condensed text-sm uppercase tracking-[2.36px] lg:gap-12">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex h-24 items-center gap-3 border-b-4 ${
                    isActive
                      ? "border-white"
                      : "border-transparent hover:border-white/50"
                  }`
                }
              >
                <span className="hidden font-bold lg:inline">
                  {link.number}
                </span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`fixed right-0 top-0 z-30 min-h-screen w-[68%] bg-white/10 px-8 pt-8 backdrop-blur-2xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="ml-auto block"
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
        >
          <img src="/assets/shared/icon-close.svg" alt="" />
        </button>

        <ul className="mt-16 flex flex-col gap-8 font-condensed uppercase tracking-[2.7px]">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex gap-3 border-r-4 py-1 ${isActive ? "border-white" : "border-transparent"}`
                }
              >
                <span className="font-bold">{link.number}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
