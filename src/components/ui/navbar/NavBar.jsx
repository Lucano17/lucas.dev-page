"use client"

import React from 'react';
import { Link } from 'react-scroll'
import styles from "./NavBar.module.css"
import { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5"
import { IoCloseSharp } from "react-icons/io5"
import { useScrollPosition } from '@/hooks/scrollPosition';

export const NavBar = () => {
  const  [navBarOpen, setNavBarOpen] = useState(false)
  const [windowDimention, setWindowDimention] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
// activeSection
  const [activeSection, setActiveSection] = useState('Home');
  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    setNavBarOpen(false);
  };

  const detectDimention = ()=>{
    setWindowDimention(
    {width: window.innerWidth,
    height: window.innerHeight
    })
  }
  
  useEffect(()=>{
    window.addEventListener("resize", detectDimention)
    windowDimention.width > 1070 && setNavBarOpen(false)
    return ()=>{
      window.removeEventListener("resize", detectDimention)
    }
  },[windowDimention])

  const links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link: "Projects"
    },
    {
      id: 3,
      link: "HowWeWork"
    },
    {
      id: 4,
      link: "Contact"
    },
  ]

  const scrollPosition = useScrollPosition()

  return (
    <>
    <div name="NavBar" className= {navBarOpen
    ? styles.navOpen
    : scrollPosition > 0
    ? styles.navOnScroll
    : styles.navBar}>
    {!navBarOpen && 
    
    <p className={styles.logo}>
      <span>Lucas DLF | </span> 
      Web development
    </p>}
    
    {!navBarOpen && windowDimention.width < 1070 ? (
      <IoMenu 
      color='white'
      onClick={()=> setNavBarOpen(!navBarOpen)} 
      size={25}/>
    ) : windowDimention.width < 1070 && (
      <IoCloseSharp 
      className={styles.closeIcon}
      onClick={()=> setNavBarOpen(!navBarOpen)} 
      color='white' 
      />
    )}
      {navBarOpen && (
    <ul className={styles.linksContainer}>  
      <li>
      {links.map((x) => (
        //key id activeSection
        <div key={x.id}>
          <Link
          onClick={
            ()=>{
              setNavBarOpen(false)
              // activeSection
              handleSectionClick(x.link)
            }}
          to={x.link}
          smooth
          duration={500}
          className={`${styles.navLink} ${activeSection === x.link ? styles.activeSection: ""}`}
          >{x.link === "HowWeWork" ? "How We Work" : x.link}</Link>
          <div className={styles.border}></div>
        </div>
      ))}
      <Link
    onClick={()=>{
      setNavBarOpen(false)
      // activeSection
      handleSectionClick("Contact")
    }}
    to={"Contact"}
    smooth
    duration={500}
    className={`${styles.navLink} ${activeSection === "Contact" ? styles.activeSection: ""}`}>
      Contact</Link>
      </li> 
      
    </ul>
    )}
    {
    windowDimention.width > 1070 &&
    <ul className={styles.linksContainer}>
    {links.map((x) => (
      <div>
        <Link
        onClick={()=>{
          setNavBarOpen(false)
          // activeSection
          handleSectionClick(x.link)
        }}
        to={x.link}
        smooth
        duration={500}
        className={`${styles.navLink} ${activeSection === x.link ? styles.activeSection: ""}`}
        >{x.link === "HowWeWork" ? "How We Work" : x.link}</Link>
        <div className={styles.border}></div>
      </div>
    ))}
    <Link
    onClick={()=>{
      setNavBarOpen(false)
      // activeSection
      handleSectionClick("Contact")
    }}
    to={"Contact"}
    smooth
    duration={500}
    className={`${styles.contactLink} ${activeSection === "Contact" ? styles.activeSection: ""}`}>
      Contact</Link>
  </ul>}
    </div>
    </>
)};