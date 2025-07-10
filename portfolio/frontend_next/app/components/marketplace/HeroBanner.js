import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>Resume Templates</p>
        <h3>45+ Resume Templates</h3>
        <img src='./marketplace/resume.png' alt="headphones" className='hero-banner-image'/>
        <div>
          <Link href="./product/ID">
          <button type='button'>Button Text</button></Link>
          <div className='desc'>
            <h5>Discription</h5>
            <p>this is the Discription</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
