/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import {  useParams} from 'react-router-dom';
import axios from "axios";


const Edituser = () => {
const [name, setName] = useState('');
const [surname, setSurname] = useState('');
const [email, setEmail] = useState('');

const { id} = useParams();

    const updateUser = async (e) => {
        e.preventDefault();
            await axios.post(`http://mi-linux.wlv.ac.uk/~2057147/abraham/public/abraham/update/${id}`,{
                name: name,
                surname: surname,
                email: email
        });
       
   
    }
        useEffect(()=>{
        getUserById();
        },[])

          const getUserById = async() =>{
        const response = await axios.get(`http://mi-linux.wlv.ac.uk/~2057147/abraham/public/abraham/show/${id}`)
            setName(response.data.name)
            setSurname(response.data.surname)
            setEmail(response.data.email)

    }

        return (
             <div >
                <div className="container" data-testid="edituser-1" >
                    <form className=" mt-3 col-auto" onSubmit={ updateUser } >
                        <div className="field mt-3">
                        
                        <input type="text"
                         className=" form-control" 
                        value={ name } 
                        onChange={ (e) => setName(e.target.value) } 
                        placeholder="Name"
                            />
                        </div>
                        <div className="field mt-3">
                         
                            <input type="text" className="input form-control"  value={ surname } 
                            onChange={ (e) => setSurname(e.target.value) }
                            placeholder="Surname"/>
                            </div>
                            <div className="field mt-3">
                        
                                <input type="text" className="input form-control" value={ email } 
                                onChange={ (e) => setEmail(e.target.value) }
                                placeholder="Email"/>
                            </div>
                            <div className="field">
                        <button className="btn btn-dark text-decoration-none mt-3">Update User</button>
                    </div>
                   
                </form>
            </div>
            </div>
        )
}

export default Edituser