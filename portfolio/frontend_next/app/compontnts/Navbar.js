"use client";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { useState } from "react";

function Navbar() {
  const navLinks = [
    { name: "home", href: "#home", external: false },
    { name: "about", href: "#about", external: false },
    { name: "work", href: "#work", external: false },
    // { name: "marketplace", href: "/marketplace", external: false },
    { name: "challenges", href: "/challenges", external: false },
    { name: "blog", href: "https://vishwabha.blogspot.com", external: true },
    { name: "contact", href: "#contact", external: false },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <strong>ASVSI</strong>
      </div>
      <ul className="app__navbar-links">
        {navLinks.map(({ name, href, external }) => (
          <li className="app__flex p-text" key={`link-${name}`}>
            <div />
            {external ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ) : (
              <a href={href}>{name}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navLinks.map(({ name, href, external }) => (
                <li key={name}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    onClick={() => setToggle(false)}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
