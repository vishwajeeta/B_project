"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import './Myskills.scss';


const skill = [
  {
    name: "Next",
    BgColor:"white",
    icon: "./about_icons/next.svg",
    
  },
  {
    name: "solidity",
    BgColor:"white",
    icon: "./about_icons/solidity.png",
    
  },
  {
    name: "django",
    BgColor:"white",
    icon: "./about_icons/django.png",
    
  },
  {
    name: "flutter",
    BgColor:"white",
    icon: "./about_icons/flutter.jfif",
    
  },
];

function Myskills() {
  const [iknow,setIknow]=useState([]);

  useEffect(()=>{
    setIknow(skill);
  },[]);

  return (
    <div>
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
