/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

const Edituser = () => {
const [name, setName] = useState('');
const [surname, setSurname] = useState('');
const [email, setEmail] = useState('');
const navigate = useNavigate();
const { id} = useParams();

    const updateUser = async (e) => {
        e.preventDefault();
            await axios.post(`http://mi-linux.wlv.ac.uk/~2057147/abraham/public/abraham/update/${id}`,{
                name: name,
                surname: surname,
                email: email
        });
       
    navigate("/");
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
                <div>
                    <form onSubmit={ updateUser }>
                        <div className="field">
                            <label className="label">Name</label>
                        <input type="text" className="input" value={ name } 
                        onChange={ (e) => setName(e.target.value) } 
                        placeholder="Name"
                            />
                        </div>
                        <div className="field">
                            <label className="label">Surname</label>
                            <input type="text" className="input" value={ surname } 
                            onChange={ (e) => setSurname(e.target.value) }
                            placeholder="Surname"/>
                            </div>
                            <div className="field">
                            <label className="label">Email</label>
                                <input type="text" className="input" value={ email } 
                                onChange={ (e) => setEmail(e.target.value) }
                                placeholder="Email"/>
                            </div>
                            <div className="field">
                        <button className="button is-primary">Update User</button>
                    </div>
                    <div className="field">
                        <button className="button is-primary">check table</button>
                    </div>
                </form>
            </div>
        )
}

export default Edituser