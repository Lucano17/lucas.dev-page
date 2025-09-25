"use client";

import React, { useMemo } from "react";
import styles from "./NavBar.module.css";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useScrollPosition } from "@/hooks/scrollPosition";

export const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  // activeSection
  const [activeSection, setActiveSection] = useState("Home");
  const scrollPosition = useScrollPosition();

  const links = useMemo(
    () => [
      { id: 1, link: "Home", navName: "Inicio" },
      { id: 2, link: "Education", navName: "Educación" },
      { id: 3, link: "Projects", navName: "Proyectos" },
      { id: 4, link: "Certificates", navName: "Certificados" },
      { id: 5, link: "Contact", navName: "Contacto" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      links.forEach(({ link }) => {
        const section = document.getElementById(link);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionTop + sectionHeight - 100
          ) {
            setActiveSection(link);
          }
        }
      });
    };

    handleScroll();
  }, [scrollPosition, links]);

  const handleSectionClick = (sectionName: string) => {
    if (sectionName === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionName);
      if (section) {
        const rect = section.getBoundingClientRect();
        const offset = window.scrollY + rect.top - 60; // Ajusta el valor (60) según la altura del NavBar.
        window.scrollTo({ top: offset, behavior: "smooth" });
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

  if (navBarOpen && windowDimention.width > 1070){
    setNavBarOpen(!navBarOpen);
  }

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
          <div className={styles.logo}>
            <button
              className={styles.logoButton}
              onClick={() => {
                handleSectionClick("Home");
              }}
            >
              Lucas.dev |{" "}
            </button>

            <p>Desarrollo de software</p>
          </div>
        )}

        {!navBarOpen && windowDimention.width < 1070 ? (
          <IoMenu
            color="white"
            onClick={() => setNavBarOpen(!navBarOpen)}
            size={25}
          />
        ) : (
          windowDimention.width < 1070 && (
            <div className={styles.mobileHeader}>
              <button
                className={styles.logoButton}
                onClick={() => {
                  handleSectionClick("Home");
                }}
              >
                Lucas.dev
              </button>
              <IoCloseSharp
                className={styles.closeIcon}
                onClick={() => setNavBarOpen(!navBarOpen)}
                color="white"
              />
            </div>
          )
        )}
        {navBarOpen && (
          // Mobile
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
                    {x.navName}
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
                  {x.navName}
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
