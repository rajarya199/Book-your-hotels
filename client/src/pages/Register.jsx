import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
const Register = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

const registerUser= async(ev)=>{
  ev.preventDefault();
  try{
    await axios.post("/api/register",{
      name,
      email,
      password,
    });
    alert("registration successful.Now you can log in");
    setName('');
    setEmail('');
    setPassword('');
  }
  catch(e){
    alert('registration failed.please try again ')
  }
 

}

  return (
    <>
    <div className='mt-4 grow flex items-center justify-around'>
        <div className='mb-32'>
        <h1 className="text-4xl text-center mb-4">Register</h1>
       
    <form  className='max-w-md mx-auto  ' onSubmit={registerUser} >
        <input type="text" 
        placeholder='your name '
        value={name} 
         onChange={e=>setName(e.target.value)}
         />
        <input type="email"
         placeholder="your@email.com"
        value={email}
        onChange={e=>setEmail(e.target.value)} 
        />
        <input type="password" 
        placeholder='password' 
        value={password}
        onChange={e=>setPassword(e.target.value)}/>
        <button className='primary'>Register</button>
        <div className='text-center py-2 text-gray-500'>
            Already a member?
            <Link  className='underline text-black' to={'/login'}>
         login
        </Link></div>

    </form>
        </div>
    </div>
    

    </>
  )
}

export default Register