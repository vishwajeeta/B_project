import React from 'react'


function Certificates() {
  return (
    <div>
      <a href="../">home</a>
    <h1>
      Certificates
      
    </h1>
    <div id="data">
    {[
  "./certificates/javaScript.png",
  "./certificates/reactJS.png",
  "./certificates/python.png",
  "./certificates/flutter.png",
  "./certificates/django.jpg",
  "./certificates/Front_End.jpg",
  "./certificates/Linux.jpg",
  "./certificates/reactJS_components.png",
].map((item)=>(
  <img src={item} alt={item}/>
))}
    </div>
    <hr/>
  
    </div>
  )
}



export default Certificates
