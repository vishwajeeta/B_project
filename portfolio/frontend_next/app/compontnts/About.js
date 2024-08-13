"use client"
import React from 'react'
import {motion} from 'framer-motion';
import './About.scss';

const about=[
  {title:'Solidity',description:'I am a good Solidity developer.',imgUrl:'./about_icons/solidity.webp'},
  {title:'Blockchain',description:'i am good at Smart-Contract security researcher.',imgUrl:'./about_icons/blockchain.webp'},
  {title:'web Development',description:'Next.js developer.',imgUrl:'./about_icons/web.webp'},
  {title:'Web3.0',description:'I am a good web3.0 developer.',imgUrl:'./about_icons/web3.webp'},
]
function About() {
  return (
    <div style={{backgroundColor:"#ffffff"}}>
      <a name="about"></a>
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
