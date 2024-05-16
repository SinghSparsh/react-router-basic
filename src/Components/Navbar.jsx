import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
  <div  className='bg-indigo-500 p-4  border-rose-500 border-red-200 rounded-lg'>
    <ul className="flex justify-between items-center px-2 ">
      <li  className='hover:text-red-200'><Link to="/">Home</Link></li>
      <li  className='hover:text-red-200'><Link to='/About'>About</Link></li>
      <li className='hover:text-red-200'><Link to='/Contact'>Contact</Link></li>
      <li  className='hover:text-red-200'><Link to='/User'>User</Link></li>

    </ul>
  </div>
  )
}

export default Navbar