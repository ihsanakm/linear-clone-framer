import React from "react";
import Container from "./Container";
import { Logo } from "./icons/Logo";
import Twitter from "./icons/Twitter";
import Github from "./icons/Github";
import Slack from "./icons/Slack";
import Link from "next/link";

export const Footer = () => {
  const sections = [
    {
      title: "Product",
      links: [
        "Features",
        "Integrations",
        "Pricing",
        "Changelog",
        "Docs",
        "API",
        "Status",
      ],
    },
    {
      title: "Company",
      links: ["About us", "Blog", "Careers", "Customers", "Brand"],
    },
    {
      title: "Resources",
      links: ["Community", "Contact", "DPA", "Terms of service"],
    },
    {
      title: "Developers",
      links: ["API", "Status", "GitHup"],
    },
  ];

  return (
    <footer className="mt-12 border-t border-whiteBorder py-[5.6rem] text-sm">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-hoverGray">
              <Logo className="w-[1.8rem] h-[1.8rem] mr-4"/>
              Linear - Designed worldwide
            </div>
            <div className="mt-auto flex space-x-4 text-hoverGray">
              <Twitter />
              <Github />
              <Slack />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
            >
              <h3 className="mb-3 font-medium">{section.title}</h3>
              <ul className="flex flex-col space-y-3 text-sm text-hoverGray">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="ease-in transition-[transform,colors] duration-300 hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
