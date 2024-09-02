"use client"
import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi';
import './Testimonial.scss';


const testimonial_data = [
  {
    name: "solidity",
    BgColor:"white",
    icon: "./about_icons/solidity.webp",
    
  },
  {
    name: "Next.js",
    BgColor:"white",
    icon: "./about_icons/next.svg",
    
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

function Testimonial() {
  const [iknow,setIknow]=useState([]);

  useEffect(()=>{
    setIknow(testimonial_data);
  },[]);

  const [currentIndex,setCurrentIndex]=useState(0);
  const test=iknow[currentIndex];

  const handleClick =(index)=>{
    setCurrentIndex(index);
  }
  return (
    <>
      {iknow.length && (
        <>
        <div className='app__testimonial-item app__flex'>
          <img src={test.icon}/>
          <div className='app__testimonial-content'>
            <p className='p-text'>{test.name}</p>
            <div>
              <h4 className='bold-text'>{test.name}</h4>
              {/* <h5 className='p-text'>{test.compant}</h5> */}
            </div>
          </div>
        </div>


        <div className='app__testimonial-btns app__flex'>
          <div className='app__flex' onClick={()=>handleClick(currentIndex ===0 ? iknow.length -1 :currentIndex -1)}>
            <HiChevronLeft/>
          </div>
          <div className='app__flex' onClick={()=>handleClick(currentIndex ===iknow.length -1 ? 0 :currentIndex +1)}>
            <HiChevronRight/>
          </div>
        </div>


        </>
      )}
    </>
  )
}

export default Testimonial
