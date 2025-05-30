"use client"
import React from 'react'
import { motion } from 'framer-motion';
import './Header.scss';

const scaleVarients={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}
function Header() {
  return (
    <div id="home" className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100,0],opacity:[0,1]}}
      transition={{duration:0.5}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className='p-text'>Hello ,I am </p>
              <h1 className='head-text'>Vishwa</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web3.O Developer</p>
            <p className='p-text'>FreeLancer</p>
            
          </div>
        </div>
      </motion.div>

      <motion.div
      whileInView={{opacity:[0,1]}}
      transition={{duration:0.5, delayChildren:0.5}}
      className='app__header-img'
      >

      <img src="/vishwaProfile.png" alt='profileBg' width="100%" height="100%" />
      <motion.img
      whileInView={{opacity:[0,1]}}
      transition={{duration:1,ease:'easeInOut'}}
      src="/download.png"
      alt="profileCircle"
      className="overlay_circle"
      />
      </motion.div>

      <motion.div
      varient={scaleVarients}
      whileInView={scaleVarients.whileInView}
      className='app__header-circles'
      >
        {['/about_icons/solidity.webp','/about_icons/next.svg','/about_icons/django.webp','/about_icons/blockchain.webp'].map((circle,index)=>(
          <div className='circle-cmp app__flex'key={`circle-${index}`}>
            <img src={circle} alt='circle'/>
          </div>
        ))}

      </motion.div>
    </div>
  )
}

export default Header;
