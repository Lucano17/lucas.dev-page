"use client";

import React, { useMemo } from "react";
import styles from "./BackNavBar.module.css";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useScrollPosition } from "@/hooks/scrollPosition";
import Link from "next/link";

export const BackNavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  // activeSection
  const [activeSection, setActiveSection] = useState("Home");
  const scrollPosition = useScrollPosition();
  
 const links = useMemo(() => [
     { id: 1, link: "Home", navName: "Inicio" },
   ], []);

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
            <Link href={"/"}> <span className={styles.titleButton}> Lucas.dev | </span></Link>
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
                  <Link
                  href={"/"}
                  className={`${styles.navLink} ${
                    activeSection === x.link ? styles.activeSection : ""
                  }`}
                >
                  {x.navName}
                </Link>
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
                <Link
                  href={"/"}
                  className={`${styles.navLink} ${
                    activeSection === x.link ? styles.activeSection : ""
                  }`}
                >
                  {x.navName}
                </Link>
                <div className={styles.border}></div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
