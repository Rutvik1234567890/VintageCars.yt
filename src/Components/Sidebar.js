import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidConversation } from "react-icons/bi";
import { RiWallet3Fill } from "react-icons/ri";
import { MdSubscriptions } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";



const Sidebar = () => {
  return (
    <>
    <div className='side_bar_content'>
      <div className='top_content'>
        <div className='item' ><FaHome className='icons'/><button >  Home </button></div>
        <div className='item'><IoIosNotifications className='icons'/>Notification</div>
        <div className='item'><FaShoppingCart className='icons'/>Shop</div>
        <div className='item'>< BiSolidConversation className='icons'/>Conversation</div>
        <div className='item'><RiWallet3Fill className='icons'/>Wallet</div>
        <div className='item'><MdSubscriptions className='icons'/>Subscription</div>
      
      </div>
      <div className='item' ><IoLogOut className='icons'/>Log out</div>
      <script>
  function say() {
    <h1>hehehuheu</h1>
  }

      </script>
    </div>
      </>
  )
}

export default Sidebar;
