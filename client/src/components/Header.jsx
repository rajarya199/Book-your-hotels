import React, { useContext } from 'react'
import hotel from '/hotel.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Header = () => {
  const{user}=useContext(UserContext)
  return (
    <>
     <header className="flex justify-between " >
        <Link to={'/'} className='logo flex items-center gap-1'>
          <img src={hotel} alt=" " className="w-9 h-9 " />
          <span className="font-bold text-xl">your stay</span>
          </Link>
          <div className="flex border border-gray-300 rounded-full gap-3 px-4 py-2 shadow-md shadow-grey-300">
          <div>Anywhere</div>
          <div className="border-l border-grey-300 "></div>
          <div> Any times </div>
          <div className="border-l border-grey-300 "></div>

          <div>Add guest</div>
          <div className="border-l border-grey-300 "></div>

          <button className='bg-primary text-white p-2 rounded-full'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</button>
          </div>
          <Link className="flex border items-center border-gray-300 rounded-full gap-3 px-4 py-2" to={user ? '/account':'/login'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
<div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>
    {!!user && (
      <div>
        {user.name}
      </div>
    )}
          </Link>
         
      </header>

    </>
  )
}

export default Header