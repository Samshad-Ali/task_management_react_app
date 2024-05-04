import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 shadow-md shadow-black flex justify-between items-center px-4' >
        <h1 className='cursor-pointer text-xl font-semibold'>To-do app.</h1>
        <img src="/todo.png" alt="to-do"
        className='h-10 w-10 object-cover rounded-md'
        />
    </div>
  )
}

export default Navbar