"use client"
import Image from "next/image";
import {vercel} from "next/image";
import {motion} from "framer-motion";
import './Navbar.scss';
import { useState } from "react";
function Navbar() {
  const [toggle,setToggle]=useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Image src="/vercel.svg" alt='logo' width={90} height={20}/>
      </div>
      <ul className="app__navbar-links">
      {['home','about','work','skills','contact'].map((item)=>(
        <li className="app__flex p-text" key={'link-'+item}>
          <div/>
          <a href={'#'+item}>{item}</a>
          </li>
      ))}
      </ul>
      <div className="app__navbar-menu">
        <vercel onclick={()=>setToggle(true)} />
        {toggle &&(
          <motion.div
          whileInView={{x:[300,0]}}
          transition={{duration:0.85,ease:'easeOut'}}
          >

          </motion.div>
          )}
      </div>
      </nav>
  )
}

export default Navbar
