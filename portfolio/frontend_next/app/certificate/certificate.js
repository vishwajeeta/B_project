"use client"
import "./certificate.scss";
import Image from "next/image";

function Certificates() {
  const mywidth=1000;
  const certificate1=[
    "javaScript.png",
    "reactJS.png",
    "python.png",
    "flutter.png",
    "django.jpg",
    "Front_End.jpg",
    "Linux.jpg",
    "reactJS_components.png",
  ]
  
  return (
    
    
    <center>
    {certificate1.map((certificate1)=>(
  
  <Image src={`/Certificates/${certificate1}`} alt={certificate1} width={mywidth} height={mywidth} optimized className='images'/>
  
))}
</center>
    
  
    
  )
}



export default Certificates
