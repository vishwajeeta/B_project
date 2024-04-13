"use client";
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Work.scss";


  const work = [
    {
      title: "Amazon",
      description: "Amazon clone with web3.0 UI .",
      imgUrl: "./works_icons/amazon.png",
      tags:"Web"
    },
    {
      title: "Transfer",
      description: "Transfering the crypto currency.",
      imgUrl: "./works_icons/transfer.png",
      tags:"Blockchain"
    },
    {
      title: "Web3.0",
      description: "I am a good web3.0 developer.",
      imgUrl: "./hi.webp",
      tags:"Web"
    },
    {
      title: "e-learning",
      description: "e-learning platform for programmer.",
      imgUrl: "./works_icons/asvsi.png",
      tags:"Django"
    },
    {
      title: "Certificate",
      description: "List of all of my certificates.",
      imgUrl: "./Certificates/javaScript.png",
      projectLink:"./certificate",
      tags:"Certificates"
    },
  ];

  function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works,setWorks ]=useState([]);
  const [filterWork,setFilterWork]= useState([]);

  useEffect(()=>{
    console.log("initial work",work)
    setWorks(work);
    setFilterWork(work)
  },[]);

// Keep in mind Blockchain of element and Blockchain of Tags should be same
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100,opacity:0}]);
    setTimeout(()=>{
      setAnimateCard([{y:0,opacity:1}]);

      if(item ==='All'){
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work)=>work.tags.includes(item)))
      }
      
    },500);
  };

  
  return (
    <>
      <h2 className="head-text">
        My Creative<span> Portfolio</span> section</h2>
      <div className="app__work-filter">
        {["Web", "Blockchain", "Django", "Next.js","Certificates", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={
                `app__work-filter-item app__flex p_text ${activeFilter === item ? "item-active" : ""}`
              }
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt="work.title" />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Work;
