"use client";

import React from "react";
import styles from "./NavBar.module.css";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useScrollPosition } from "@/hooks/scrollPosition";

export const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  // activeSection
  const [activeSection, setActiveSection] = useState("Home");

  const handleSectionClick = (sectionName: string) => {
    if (sectionName === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionName);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  
    setActiveSection(sectionName);
    setNavBarOpen(false);
  };

  const [windowDimention, setWindowDimention] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimention({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const detectDimention = () => {
      setWindowDimention({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", detectDimention);
    return () => {
      window.removeEventListener("resize", detectDimention);
    };
  }, []);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "Projects" },
    // { id: 3, link: "HowWeWork" },
    { id: 4, link: "Contact" },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <>
      <div
        id="NavBar"
        className={
          navBarOpen
            ? styles.navOpen
            : scrollPosition > 0
            ? styles.navOnScroll
            : styles.navBar
        }
      >
        {!navBarOpen && (
          <p className={styles.logo}>
            <span>Lucano.dev | </span>
            Web development
          </p>
        )}

        {!navBarOpen && windowDimention.width < 1070 ? (
          <IoMenu
            color="white"
            onClick={() => setNavBarOpen(!navBarOpen)}
            size={25}
          />
        ) : (
          windowDimention.width < 1070 && (
            <IoCloseSharp
              className={styles.closeIcon}
              onClick={() => setNavBarOpen(!navBarOpen)}
              color="white"
            />
          )
        )}
        {navBarOpen && (
          <ul className={styles.linksContainer}>
            <li>
              {links.map((x) => (
                //key id activeSection
                <div key={x.id}>
                  <button
                    onClick={() => handleSectionClick(x.link)}
                    className={`${styles.navLink} ${
                      activeSection === x.link ? styles.activeSection : ""
                    }`}
                  >
                    {x.link === "HowWeWork"
                      ? "How We Work"
                      : x.link && x.link === "Projects"
                      ? "Proyectos"
                      : x.link}
                  </button>
                  <div className={styles.border}></div>
                </div>
              ))}
            </li>
          </ul>
        )}
        {windowDimention.width > 1070 && (
          <ul className={styles.linksContainer}>
            {links.map((x) => (
              <div key={x.id}>
                <button
                  onClick={() => {
                    handleSectionClick(x.link);
                  }}
                  className={`${styles.navLink} ${
                    activeSection === x.link ? styles.activeSection : ""
                  }`}
                >
                  {x.link === "HowWeWork"
                    ? "How We Work"
                    : x.link && x.link === "Projects"
                    ? "Proyectos"
                    : x.link}
                </button>
                <div className={styles.border}></div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
