"use client"
import "./certificate.scss";
import React,{lazy,Suspense} from "react";
// import Certificates from "./certificate";

const Certificates=lazy(()=>import("./certificate"))
function page() {
  return (
    <div>
      <a href="../">home</a>
    <h1><u>
      Certificates
      </u>
    </h1>
    <Suspense fallback={<p>Loading....</p>}>
    <Certificates/>
    </Suspense>
    <hr/>
  
    </div>
  )
}



export default page
