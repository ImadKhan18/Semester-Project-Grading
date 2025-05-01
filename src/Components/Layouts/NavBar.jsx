import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-xl font-bold">Grading System</p>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">Course</li>
          <li className="hover:text-gray-200 cursor-pointer">Login</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
