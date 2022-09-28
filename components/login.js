import React, { useEffect, useState } from 'react'

export default function Login() {

  /* It's a hook that allows you to track the mouse position. */
  const [cursurX, setCursurX] = useState()
  const [cursurY, setCursurY] = useState()
  useEffect(() => {
    window.addEventListener('mousemove', (e)=>{
      setCursurX(e.x)
      setCursurY(e.y)
    })
  }, []);

  

  
  return (
    <>
      <div className='fixed p-4 transition-all duration-75 transform bg-red-400 rounded-full cursor' style={{
        left: cursurX + "px",
        top: cursurY + "px"
      }}></div>
      
    </>
  )
}
