"use client"
import "./certificate.scss";
import Image from "next/image";

function Certificates() {
  const mywidth=1000;
  const certificate1=[
    "javaScript.webp",
    "python.webp",
    "blockchain-basics-completed.png",
    "reactJS.webp",
    "flutter.webp",
    "django.webp",
    "Front_End.webp",
    "Linux.webp",
    "reactJS_components.webp",
  ]
  
  return (
    
    
    <center>

<div className="flex m-auto justify-center items-center flex-col md:flex-row lg:flex-row xl:flex-row">
<img src={`https://lh3.googleusercontent.com/UDiaF1JgtVpL05mGnoELd7Wz2sQP0CQQk2pJ72rYJwynRn5M-J7W89tHVo6U0tVQ9zC_l8ynkonS82iw6WGfpOOZ__ukDV5ulQ`} alt={'certificate'} fill="true"  className='images'/>
<img src={`https://lh3.googleusercontent.com/fRkqN2gbU44b0WlEIDqFooQuUqDqzrfEAPVPCuJEtGQFevnk1wATA4c3H_uzMKU4oN710vddKmxcro0Sh3nLgdUvlm1dUh4xk9kR=k`} alt={'certificate1'}  fill="true" className='images'/> 
</div>
    {certificate1.map((certificate1,index)=>(
  
  <Image src={`/Certificates/${certificate1}`} key={index} alt={certificate1} width={mywidth} height={mywidth} optimized="true" className='images'/>
  
))}
</center>
    
  )
}



export default Certificates
