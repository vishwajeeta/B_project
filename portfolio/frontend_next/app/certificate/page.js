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
    <div>
      <a href="../">home</a>
    <h1><u>
      Certificates
      </u>
    </h1>
    
    <center>
    {certificate1.map((certificate1)=>(
  
  <Image src={`/Certificates/${certificate1}`} alt={certificate1} width={mywidth} height={mywidth} optimized className='images'/>
  
))}
</center>
    
    <hr/>
  
    </div>
  )
}



export default Certificates
