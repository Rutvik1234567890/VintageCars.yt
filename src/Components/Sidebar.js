import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";




const Sidebar = () => {
  return (
    <>
    <div className='side_bar_content'>
      <div className='top_content'>
        <div className='item' ><FaHome className='icons'/> <a href='about.html' style={{color: 'white', textUnderlineOffset: 'none'}}>About</a></div>
        <div className='item'><FaShoppingCart className='icons'/><a href='shopdetail.html' style={{color: 'white'}}>Shop Detail</a></div>
        <div className='item'><IoIosNotifications className='icons'/><a href='brands.html' style={{color: 'white'}}>Brands</a></div>
      
    
      
      </div>
      <div className='item' ><IoLogOut className='icons'/><a href='logout.html' style={{color: 'white'}}>Log out</a></div>
     
    </div>
      </>
  )
}

export default Sidebar;
