"use client"
import React,{useState,useEffect} from 'react';
import {AiFillEye,AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';
import './Work.scss';
function Work() {
  const handleWorkFilter =(item)=>{
    const [activeFilter,setActiveFilter]=useState('All')
  }
  return (
    <>
      <h2 className='head-text'>My Creative<span> Portfolio</span><br/> means <span>Good Business</span> section</h2>
      <div className='app__work-filter'>
        {['Web3','Blockchain','django','Next.js','All'].map((item,index)=>(
          <div
          key={index}
          onClick={()=> handleWorkFilter(item)}
          className={'app__work-filter-item app__flex p_text ${activeFilter=== item ? "item-active" : ""}'}
          >
            {item}
            </div>
        ))}
      </div>
    </>
  )
}

export default Work
