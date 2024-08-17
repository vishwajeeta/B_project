"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import './Myskills.scss';


const skill = [
  {
    name: "Next.js",
    BgColor:"white",
    icon: "./about_icons/next.svg",
    
  },
  {
    name: "solidity",
    BgColor:"white",
    icon: "./about_icons/solidity.webp",
    
  },
  {
    name: "django",
    BgColor:"white",
    icon: "./about_icons/django.webp",
    
  },
  {
    name: "flutter",
    BgColor:"white",
    icon: "./about_icons/flutter.webp",
    
  },
];

function Myskills() {
  const [iknow,setIknow]=useState([]);

  useEffect(()=>{
    setIknow(skill);
  },[]);

  return (
    <div>
      <a name="skills"/>
     <h2 className="head-text" >Skills:-</h2>
     <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {iknow.map((skill)=>(
          <motion.div
          whileInView={{opacity:[0,1]}}
          transition={{duration:0.5}}
          className="app__skills-item app__flex"
          key={skill.name}
          >
            <div className="app__flex" style={{backgroundColor:skill.BgColor}}>
              <img src={skill.icon} alt={skill.name}/>
            </div>
            <p className="p-text">{skill.name}</p>
            


          </motion.div>
        ))}
      </motion.div>
     </div>
    </div>
  )
}

export default Myskills
