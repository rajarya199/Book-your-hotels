import React, { useContext } from 'react'
 import { UserContext } from '../UserContext'
 import { Navigate, useParams } from 'react-router-dom'
 import { Link } from 'react-router-dom'
const AccountPage = () => {
  let {subpage}=useParams();
  if(subpage== undefined){
   subpage ='profile'
  }
  const {ready,user}=useContext(UserContext)
  if(!ready)
{
  return 'Loading...' ;
}
    if( ready && !user){
      return <Navigate to={'/login'}/>
    }

 function linkClasses(type=null){
  let classes="py-2 px-6"
  if(type === subpage){
    classes +=" bg-primary text-white rounded-full"

  }
  return classes;
 }

return (
    <>
  <div>{user.name}</div>
  <nav className='flex w-full justify-center mt-8 gap-4 mb-8'>
    <Link className={linkClasses('profile')}>My profile</Link>
    <Link className={linkClasses('bookings')} to={'/account/booking'}> My booking</Link>
    <Link className={linkClasses('places')} to ={'/account/palces'}> My accomodation</Link>

  </nav>
  {
    subpage==="profile" && (
      <div className='text-center max-w-lg mx-auto'>
        Logged in as {user.name}({user.email})<br/>
        <button className='primary max-w-sm mt-2'> Logout</button>
      </div>
    )
  }
    
    </>
  )
}

export default AccountPage