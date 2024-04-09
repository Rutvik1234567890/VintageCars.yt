import React from 'react'
import { FaCarTunnel } from "react-icons/fa6";
import { CgUnavailable } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
   
    <div className='nav_bar'> 
    <div className='logo'> Ak Vintage Cars &nbsp;<FaCarTunnel/> </div>
    <div className='search'>
        <h2><i><FaCarTunnel/>  AK  VITAGE  CAR SELL <FaCarTunnel/>   </i></h2>
     
    </div>
    <div className='seller'>Recently Selled   &nbsp;< CgUnavailable /> </div>
    
    
    </div>
   
   </>
  )
}

export default Navbar
