import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'phosphor-react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/cart'>
          <ShoppingBag size={32} />
        </Link>
      </div>
    </div>
  )
}

export default NavBar
