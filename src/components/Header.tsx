"use client";

import React, { use, useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { Logo } from "./icons/Logo";
import PrimaryButton from "./buttons/PrimaryButton";
import HamburgerIcon from "./icons/HamburgerIcon";

export const Header = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const navElements = [
    { item: "Features", isHidden: false },
    { item: "Method", isHidden: false },
    { item: "Customers", isHidden: true },
    { item: "Chnagelog", isHidden: true },
    { item: "Intergrations", isHidden: true },
    { item: "Pricing", isHidden: false },
    { item: "Company", isHidden: false },
  ];

  //Prevent bg scroll while mobile menu is open
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", isHamburgerOpen);
  }, [isHamburgerOpen]);

  //Reset bg scroll when resize happens 
  useEffect(() => {
    const closeHamburger = () => setHamburgerOpen(false);
    window.addEventListener("orientationchange", closeHamburger);
    window.addEventListener("resize", closeHamburger);

    return () => {
      window.removeEventListener("orientationchange", closeHamburger);
      window.removeEventListener("resize", closeHamburger);
    };
  }, [isHamburgerOpen]);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-whiteBorder backdrop-blur-[12px] z-10">
      <Container className="flex h-[var(--navigation-height)]">
        <Link className="flex items-center text-md" href="/">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4" /> Linear
        </Link>
        <nav className="flex w-full items-center text-sm ">
          <div
            className={` transition-[visibility] ${
              isHamburgerOpen ? "visible" : "invisible delay-500"
            }`}
          >
            <ul
              className={`md:flex md:visible md:opacity-100 md:relative fixed md:top-0 top-[var(--navigation-height)] left-0 items-center md:h-full md:bg-opacity-0 bg-background w-full h-[calc(100vh-var(--navigation-height))] transition-opacity duration-500 md:transition-none ${
                isHamburgerOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              {navElements.map((nav, i) => (
                <li
                  key={i}
                  className={`ml-4 h-[var(--navigation-height)] md:border-b-0 border-b border-whiteBorder content-center ${
                    nav.isHidden ? "md:hidden lg:block" : ""
                  }`}
                >
                  <Link
                    className={`block md:transform-none ease-in transition-[transform,colors] md:transition-[color] duration-300 hover:text-hoverGray ${
                      isHamburgerOpen ? "translate-y-0" : "translate-y-8"
                    }`}
                    href="#"
                  >
                    {nav.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 items-center w-full justify-end">
            <a>Log in</a>
            <PrimaryButton content="Sign up" className="px-4  h-8"/>
            <button
              onClick={() => {
                setHamburgerOpen((prev) => !prev);
              }}
              className="md:hidden"
            >
              <span className="sr-only">Hamburger Icon</span>
              <HamburgerIcon />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
