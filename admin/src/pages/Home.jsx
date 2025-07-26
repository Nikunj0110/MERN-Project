import React from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'

function Home() {
  return (
    <div className='w-[100vw] h-[100vh] text-black relative'>
      <Nav/>
      <Sidebar/>
    </div>
  )
}

export default Home