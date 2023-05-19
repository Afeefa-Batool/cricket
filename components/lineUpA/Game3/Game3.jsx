import React from 'react';
import Time2 from '../TIme/Time2';
export default function Game3() {
  return (
    <>
    <div className="relative isolate overflow-hidden bg-green-400 py-24 sm:py-32" style={{height: 600}}>
{/* <img
  alt=""
  className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
/> */}
<div
  className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
  aria-hidden="true"
>
  <div
    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
    style={{
      clipPath:
        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    }}
  />
</div>
<div
  className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
  aria-hidden="true"
>
  <div
    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
    style={{
      clipPath:
        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    }}
  />
</div>
<div className="me-auto max-w-7xl px-6 lg:px-8" style={{marginLeft: "-190px",
 marginTop:"270px"}}>
  <div className="ms-auto max-w-2xl lg:mx--5">
    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
   
     <Time2/>
  
    </h2>


  </div>
 
    
</div>
</div>

   
   </>
  )
}
