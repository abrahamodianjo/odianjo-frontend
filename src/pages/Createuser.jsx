import React, { useState } from 'react'
import axios from 'axios';

import Navigationbar from '../components/Navigationbar'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
function Createuser() {

const [loading, setloading] = useState(false);
const [title, setTitle] = useState("");
const [name, setName] = useState("");
const [surname, setSurname] = useState("");
const [email, setEmail] = useState("");
const [city, setCity] = useState("");


//navigate


const navigate = useNavigate()

const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        setloading(true);

        //see that form is sending data 
        // console.table({title,name,surname,email,city})

        //handle data and send to backend
        const {data} = await axios.post('/odianjo/create/',{
          title,name,email,city,surname  });
        
        setName(data.name);
        setSurname(data.surname);
        setEmail(data.email);
        setCity(data.city);
        setTitle(data.title);      
        setloading(false);
        toast.dark("User created successfully!")
        navigate('/')
    }catch(err){
        console.log(err);
        setloading(false)
       toast.error(err.message)
    }
} 






  return (
    <div>
        <Navigationbar/>


    {/* USER CREATION FORM */}

    <div class="animate-pulse min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
        <span class="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">Create User</span>
  <div class="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
        <form onSubmit={handleSubmit}>
            <label for="name" class="block">Name</label>
            <input value={name} onChange={e=>setName(e.target.value)} type="text" class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Your name"/>
            <label for="" class="block">Title</label>
            <input type="text" value={title} onChange={e=>setTitle(e.target.value)}  class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Your Title"/>
            <label for="" class="block">Surname</label>
            <input type="text"  value={surname} onChange={e=>setSurname(e.target.value)} class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Your surname"/>
            <label for="" class="block">City</label>
            <input type="text"  value={city} onChange={e=>setCity(e.target.value)} class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Your city"/>
            <label for="" class="block">Email</label>
            <input type="Email"  value={email} onChange={e=>setEmail(e.target.value)} class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Your email"/>
           
					<div class="flex items-start">
					
						</div>
          <button type="submit" class="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded">Create User</button>
        </form>
  </div>
</div>
    </div>
  )
}

export default Createuser