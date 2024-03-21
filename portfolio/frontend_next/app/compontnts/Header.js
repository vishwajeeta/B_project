"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
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
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100,0],opacity:[0,1]}}
      transition={{duration:0.5}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>Hii</span>
            <div style={{marginLeft:20}}>
              <p className='p-text'>Hello ,I am </p>
              <h1 className='head-text'>Vishwa</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>FreeLancer</p>
            
          </div>
        </div>
      </motion.div>

      <motion.div
      whileInView={{opacity:[0,1]}}
      transition={{duration:0.5, delayChildren:0.5}}
      className='app__header-img'
      >

      <Image src="/vishwaProfile.png" alt='profile_bg' width={90} height={20}/>
      <motion.img
      whileInView={{opacity:[0,1]}}
      transition={{duration:1,ease:'easeInOut'}}
      src="/vishwaProfile.png"
      alt="profile_circle"
      className="overlay_circle"
      />
      </motion.div>

      <motion.div
      varient={scaleVarients}
      whileInView={scaleVarients.whileInView}
      className='app__header-circles'
      >

      </motion.div>
    </div>
  )
}

export default Header
