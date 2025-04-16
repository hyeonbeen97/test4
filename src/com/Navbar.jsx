import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/scrolltext">ScrollText</Link>
      <Link to="/guestbook">guestbook</Link>
    </nav>
  )
}

export default Navbar
