import React, { useContext, useState } from 'react'
 import { UserContext } from '../UserContext'
 import { Navigate, useParams } from 'react-router-dom'
 import { Link } from 'react-router-dom'
 import axios from 'axios'
const AccountPage = () => {
  const[redirect,setRedirect]=useState(null)
  const{ready,user,setUser}=useContext(UserContext)
  let {subpage}=useParams();
  if(subpage== undefined){
   subpage ='profile'
  }
   async function logout(){
     await axios.post('/api/logout')
    
     setRedirect('/');
     setUser(null);

  }
  //if user data is not ready yet show loading 
  if(!ready)
{
  return 'Loading...' ;
}          

//user not logged in ---redirect to login page
    if( ready && !user && !redirect){
      return <Navigate to={'/login'}/>
    }

 function linkClasses(type=null){
  let classes="py-2 px-6"
  if(type === subpage){
    classes +=" bg-primary text-white rounded-full"

  }
  return classes;
 }
 if(redirect){
  return <Navigate to={redirect}/>
 }

return (
    <>
  <div>{user.name}</div>
  <nav className='flex w-full justify-center mt-8 gap-4 mb-8'>
    <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
    <Link className={linkClasses('bookings')} to={'/account/bookings'}> My booking</Link>
    <Link className={linkClasses('places')} to ={'/account/places'}> My accomodation</Link>

  </nav>
  {
    subpage ==="profile" && (
      <div className='text-center max-w-lg mx-auto'>
        Logged in as {user.name}({user.email})<br/>
        <button className='primary max-w-sm mt-2' onClick={logout}> Logout</button>
      </div>
    )
  }
    
    </>
  )
}

export default AccountPage