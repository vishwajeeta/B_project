"use client"
import Image from "next/image";
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from "framer-motion";
import './Navbar.scss';
import { useState } from "react";

function Navbar() {

  const [toggle , setToggle]=useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <strong>ASVSI</strong>
      </div>
      <ul className="app__navbar-links">
      {['home','about','work','marketplace','blog','contact'].map((item)=>(
        <li className="app__flex p-text" key={'link-'+item}>
          <div/>
          
          {item=='blog'?<a href={/*`/${item}`*/ `https://vishwabha.blogspot.com`} target="_blank">{item}</a>:item=='marketplace'?<a href="/marketplace">{item}</a>:<a href={`#${item}`}>{item}</a>}
          </li>
      ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={()=>setToggle(true)} />

        {toggle && (
          <motion.div
          whileInView={{x:[300,0]}}
          transition={{duration:0.85,ease:'easeOut'}}
          >
          
            <HiX onClick={()=>setToggle(false)}/>
            <ul>
            {['home','about','work','marketplace','blog','contact'].map((item)=>(
        <li key={item}>
          {item=='blog'?<a href={`/${item}` /*`https://vishwabha.blogspot.com`*/} target="_blank" onClick={()=>setToggle(false)}>{item}</a>:item=='marketplace'?<a href="/marketplace">{item}</a>:<a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>}
          {/* <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a> */}
          </li>
      ))}
      </ul>
          </motion.div>
          
          )}
      </div>
      </nav>
  )
}

export default Navbar
