"use client"
import React from 'react'
import { useEffect,useState } from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import './About.scss';

const about=[
  {title:'web Development',description:'I am a good web developer.',imgUrl:'./hi.webp'},
  {title:'Blockchain',description:'I am a good blockchain developer.',imgUrl:'./hi.webp'},
  {title:'Web3.0',description:'I am a good web3.0 developer.',imgUrl:'./hi.webp'},
  {title:'Solidity',description:'I am a good Solidity developer.',imgUrl:'./hi.webp'}
]
function About() {
  return (
    <div style={{backgroundColor:"#ffffff"}}>
    <h2 className='head-text'>I Know that<span> Good App</span><br/> means <span>Good Business</span></h2>
    <div className='app__profiles'>
      {about.map((about,index)=>(
        <motion.div
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition={{duration:0.5,type:'tween'}}
        className='app__profile-item'
        key={about.title+index}
        >
          <img src={about.imgUrl} alt={about.title}/>
          <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop:10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </div>
  )
}

export default About
