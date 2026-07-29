"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GoX } from "react-icons/go";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About", external: false },
    { href: "/projects", label: "Projects", external: false },
    { href: "mailto:iamjosephtunde@gmail.com", label: "Contact", external: true },
  ];

  return (
    <header className={`h-18 md:h-20 flex justify-center border-b sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "border-gray-300 shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "border-gray-300 shadow-none"}`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between w-full px-4 md:px-6">
        <div className="border-2 border-white shadow-[4px_4px_0px_0px_#999999] p-1 bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000]">
          <Link href="/" className="uppercase text-black font-semibold text-[1rem] tracking-wider">
            HeyJoseph.
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = !link.external && pathname?.startsWith(link.href);
              return (
                <li
                  key={link.href}
                  className={`border rounded-md py-1.5 px-3 transition-all duration-300 hover:bg-gray-100 hover:border-gray-400 ${isActive ? "bg-gray-100 border-gray-400" : "border-gray-200"
                    }`}
                >
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-black text-[.9rem]">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-black text-[.9rem]">
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href="/01_Joseph_Olatunde_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 rounded-md border-white shadow-[4px_4px_0px_0px_#999999] py-1.5 px-3 cursor-pointer font-semibold text-[.9rem] bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000]"
          >
            Download CV
          </a>
        </div>

        <button
          className="md:hidden flex items-center justify-center w-9 h-9 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <GoX className="w-5 h-5" />
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="2" y1="4" x2="14" y2="4" />
              <line x1="2" y1="8" x2="14" y2="8" />
              <line x1="2" y1="12" x2="14" y2="12" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden animate-[fadeIn_200ms_ease-out]"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 h-full w-72 bg-white border-l-2 border-black shadow-[-4px_0_0_0_#000] p-6 flex flex-col gap-6 animate-[slideInRight_250ms_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <GoX className="w-5 h-5" />
              </button>
            </div>

            <nav>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = !link.external && pathname?.startsWith(link.href);
                  const classes = `block px-4 py-3 border-2 rounded-lg font-semibold transition-all duration-200 ${isActive
                      ? "bg-violet-100 border-violet-400 text-violet-700"
                      : "border-black hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_#000]"
                    }`;
                  return (
                    <li key={link.href}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className={classes}>
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={classes}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-auto">
              <a
                href="/01_Joseph_Olatunde_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-violet-500 text-white border-2 border-black rounded-lg font-semibold shadow-[3px_3px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000]"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
