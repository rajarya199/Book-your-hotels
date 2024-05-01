import React from 'react'
import AccountNav from '../components/AccountNav'
import { useState } from 'react';
import {Navigate, useParams} from "react-router-dom";
import axios from 'axios';
import Perks from '../components/Perks';
const PlaceForm = () => {
  const [title,setTitle] = useState('');
  const [address,setAddress] = useState('');
  const[photolink,setPhotolink]=useState('')
  const [addedPhotos,setAddedPhotos] = useState([]);
  const [description,setDescription] = useState('');
  const [perks,setPerks] = useState([]);
  const [extraInfo,setExtraInfo] = useState('');
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [maxGuests,setMaxGuests] = useState(1);
  const [price,setPrice] = useState(100);
  function inputHeader(text) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    );
  }
  function inputDescription(text) {
    return (
      <p className="text-gray-500 text-sm">{text}</p>
    );
  }
  function preInput(header,description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }
 async function addPhotoByLink( ev){
  ev.preventDefault()
   const {data:filename}=await axios.post('/api/upload-by-link',{link:photolink}) 
  
  setAddedPhotos(prev=>{
    return[...prev,filename];
  })
  setPhotolink('');
}
const uploadPhoto = async (ev) => {
   const files=ev.target.files;
   const data=new FormData();
   for(let i=0;i<files.length;i++){
    data.append('photos',files[i]);
   }
    await axios.post('/upload',data,{
    headers:{'Content-type':'multipart/form-data'}
   }).then(response=>{
    const{data:filenames}=response;
    setAddedPhotos(prev=>{
      return[...prev,...filenames];
   })
})
}
  return (
    <div>
        <AccountNav/>
          <form action="" className="mb-20">
          {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}

            <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: My lovely apt" />
            {preInput('Address', 'Address to this place')}
             <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="address" />
             {preInput('Photos','more = better')}
            <div className='flex gap-2'>
                <input type="text" 
                value={photolink} 
                onChange={ev=>setPhotolink(ev.target.value)}
                placeholder={'Add Using a link.......'} />
                <button onClick={addPhotoByLink} className='bg-gray-200 px-4 rounded-2xl'>Add&nbsp;photos</button>
            </div>
<div>
  <img src="http://localhost:4000/uploads/photo1714293028141.jpg" alt="" />
</div>
            <div className=' gap-2 mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              {addedPhotos.length > 0 && addedPhotos.map(link=>(
                <div  className='h-32 flex'>
                  
                  <img className='rounded-2xl w-full object-cover' src={`http://localhost:4000/uploads/${link}`} alt=""/>

         {/* <img className='rounded-2xl' src={'http://localhost:4000/uploads'+ link} alt=""/> */}
                </div>
              ))}
                <label className="h-32 cursor-pointer  flex items-center justify-center border bg-transparent rounded-2xl p-2">
               <input type="file" multiple className='hidden' accept="image/*" onChange={uploadPhoto} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
 Upload </label>
            </div>

      {preInput('Description','description of the place')}
      <textarea value={description} 
      onChange={ev => setDescription(ev.target.value)} />

      
      {preInput('Perks','select all the perks of your place')}
      <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      <Perks selected={perks} onChange={setPerks} />

      </div>
      {preInput('Extra info','house rules, etc')}
        <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)}/>
        
        {preInput('Check in&out times','add check in and out times, remember to have some time window for cleaning the room between guests')}
      <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input type="text"
                    value={checkIn}
                    onChange={ev => setCheckIn(ev.target.value)}
                   placeholder="14"/>
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input type="text"
                         value={checkOut}
                         onChange={ev => setCheckOut(ev.target.value)}
                   placeholder="11" />
          </div>
          <div>
            <h3 className="mt-2 -mb-1 " >Max number of guests</h3>
            <input type="number" min={0} value={maxGuests}
                   onChange={ev => setMaxGuests(ev.target.value)}
                />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Price per night</h3>
            <input type="number" min={0} value={price}
                   onChange={ev => setPrice(ev.target.value)}
                  />
          </div>
        </div> 
        <button className='primary my-4'>Save</button>
          </form>
        </div>
    
  )
}

export default PlaceForm