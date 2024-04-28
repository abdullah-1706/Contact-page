import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex px-[3vw] items-center justify-between h-[80px]'>
        <div className="logo">
          <img src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/project-2/project-2/public/images/logo.png" alt="" className='h-[50px] ' />
        </div>
        <div className="tags flex gap-[1.2vw]  ">
          <h3 className='hover:font-semibold hover:text-[1.3vw]'><a href="">Home</a></h3>
          <h3 className='hover:font-semibold hover:text-[1.3vw]'><a href="">About</a></h3>
          <h3 className='hover:font-semibold hover:text-[1.3vw]'><a href="">Services</a></h3>
        </div>
      </nav>
      <hr className='border-2 border-black/10' />
    </div>
  )
}

export default Navbar
