import React from 'react'
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";
import { FaCarTunnel } from "react-icons/fa6";
import { CgUnavailable } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
   
    <div className='nav_bar'> 
    <div className='logo'> Ak Vintage Cars &nbsp;<FaCarTunnel/> </div>
    <div className='search'>
        <div className='left'> <FcSearch /> search here...</div>
        <div className='right'>< IoFilter />Filters</div>
    </div>
    <div className='seller'>Recently Selled   &nbsp;< CgUnavailable /> </div>
    
    
    </div>
   
   </>
  )
}

export default Navbar
