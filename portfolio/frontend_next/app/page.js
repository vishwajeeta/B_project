import Image from "next/image";
import About from "./compontnts/About";
import Work from "./compontnts/Work";
import Navbar from "./compontnts/Navbar";
import Header from "./compontnts/Header";
import Testimonial from "./compontnts/Testimonial";
import Footer from "./compontnts/Footer";
import Myskills from "./compontnts/Myskills";


import './App.scss';

export default function Home() {
  return (
    <div className="app">

    <Navbar/>
    
    <Header/>
    <About/>
    <Work/>
    <Myskills/>
    <Testimonial/>
    <Footer/>
    </div>
  );
}
