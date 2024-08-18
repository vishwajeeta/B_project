"use client"
import "./certificate.scss";
import Image from "next/image";

function Certificates() {
  const mywidth=1000;
  const certificate1=[
    "javaScript.webp",
    "reactJS.webp",
    "python.webp",
    "flutter.webp",
    "django.webp",
    "Front_End.webp",
    "Linux.webp",
    "reactJS_components.webp",
  ]
  
  return (
    
    
    <center>

<div className="flex m-auto justify-center items-center sm:flex-col md:flex-col lg:flex-row xl:flex-row">
<img src={`https://lh3.googleusercontent.com/UDiaF1JgtVpL05mGnoELd7Wz2sQP0CQQk2pJ72rYJwynRn5M-J7W89tHVo6U0tVQ9zC_l8ynkonS82iw6WGfpOOZ__ukDV5ulQ`} alt={'certificate'} fill  className='images'/>
<img src={`https://lh3.googleusercontent.com/fRkqN2gbU44b0WlEIDqFooQuUqDqzrfEAPVPCuJEtGQFevnk1wATA4c3H_uzMKU4oN710vddKmxcro0Sh3nLgdUvlm1dUh4xk9kR=k`} alt={'certificate1'}  fill className='images'/> 
</div>
    {certificate1.map((certificate1)=>(
  
  <Image src={`/Certificates/${certificate1}`} alt={certificate1} width={mywidth} height={mywidth} optimized className='images'/>
  
))}
</center>
    
  )
}



export default Certificates
