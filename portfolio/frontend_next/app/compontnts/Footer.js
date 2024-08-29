"use client"
import React,{useState} from 'react'
import Image from 'next/image';
import './Footer.scss';
import { submitAction } from '@/actions/form';
import { useRef } from 'react';

const Footer = () => {
  let ref=useRef()
  return (
    <div style={{backgroundColor:"#ffffff"}}>
      <a name="contact"></a>
      <h2 className='head-text'>Take a coffe & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <Image src={"/icons/mail.png"} alt='email' width={100} height={100}/>
          <a href='mailto:secureblockasvsi@gmail.com' className='p-text'>secureblockasvsi@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={"./icons/phone.webp"} alt='phone'/>
          <a href='tel: +91 (9538) 938-200' className='p-text'>+91 (9538) 938-200</a>
        </div>
      </div>

      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Nane' name='name' autoComplete='true'/>
          </div>
          <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your email' name='email' autoComplete='true'/>
        </div>
        <div>
          <textarea
          className='p-text'
          placeholder='Your Message'
          name='message'
          />
        </div>
        <button type='submit' className='p-text'>Send Message</button>
      </div>
      </form>
    </div>
  )
}

export default Footer
