import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsArrowLeftCircle} from 'react-icons/bs'


const Header = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='Header w-full mx-auto '>
      <div onClick={handleNav} className="px-4 mt-6 lg:py-18 lg:px-10 absolute" >
        {
          !nav ? <GiHamburgerMenu size={50}/> : <GiHamburgerMenu className='text-[#F331E0]' size={50}/>
        }
      <p className='text-md font-bold text-center' >MENU</p>
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[20%] h-screen bg-[#FDEEFC] opacity-95 ease-in-out duration-300' : 'fixed left-[-100%]'}>
        <div onClick={handleNav} className='pt-7 pl-9'>
          {
            !nav ? <BsArrowLeftCircle size={50}/> : null
          }
        {/* <BsArrowLeftCircle size={30}/> */}
        </div>
        <ul className='pt-[140px]'>
          <li className='p-4 pl-[20%] font-semibold text-4xl'>Home</li>
          <li className='p-4 pl-[20%] font-semibold text-4xl'>Services</li>
          <li className='p-4 pl-[20%] font-semibold text-4xl' >Visit Us</li>
          <li className='p-4 pl-[20%] font-semibold text-4xl' >About</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Header