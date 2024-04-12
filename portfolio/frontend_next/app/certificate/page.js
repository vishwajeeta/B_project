"use client"
import Image from 'next/image'
import "./certificate.scss";


function Certificates() {
  const mywidth=1000;
  const certificate1=[
    "/certificates/javaScript.png",
    "/certificates/reactJS.png",
    "/certificates/python.png",
    "/certificates/flutter.png",
    "/certificates/django.jpg",
    "/certificates/Front_End.jpg",
    "/certificates/Linux.jpg",
    "/certificates/reactJS_components.png",
  ]
  
  return (
    <div>
      <a href="../">home</a>
    <h1><u>
      Certificates
      </u>
    </h1>
    
    <center>
    {certificate1.map((item)=>(
  
  <Image src={item} alt={item} width={mywidth} height={mywidth} className='images'/>
  
))}
</center>
    
    <hr/>
  
    </div>
  )
}



export default Certificates
