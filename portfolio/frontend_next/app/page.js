import Image from "next/image";
import About from "./compontnts/about";
import Work from "./compontnts/work";
import Navbar from "./compontnts/Navbar";
import Header from "./compontnts/Header";
import Testimonial from "./compontnts/Testimonial";
import Footer from "./compontnts/Footer";
import Myskills from "./compontnts/Myskills";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Myskills/>
    <Testimonial/>
    <Footer/>
    </>
  );
}
