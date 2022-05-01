import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Adduser = () => {
const [name, setName] = useState('');
const [surname, setSurname] = useState('');
const [email, setEmail] = useState('');
const navigate = useNavigate();

const saveUser = async (e) => {
        e.preventDefault();
            await axios.post('http://mi-linux.wlv.ac.uk/~2057147/abraham/public/abraham/create/',{
            name: name,
            surname: surname,
            email: email
        });
            navigate("/");
}

    return (
        <div>
            <form  class="container bg-light mt-5 mb-4" onSubmit={ saveUser }>
                <div className="form-group">
                    <label className="label">Name</label>
                    <input 
                        type="text" 
                        className="input" 
                       
                        value={ name } 
                        onChange={ (e) => setName(e.target.value) }
                        placeholder="Name"
                    />
                </div>
                <div className="form-group">
                    <label className="label">Surname</label>
                        <input 
                        type="text" 
                        className="input" 
                        class="form control"
                        value={ surname } 
                        onChange={ (e) => setSurname(e.target.value) }
                        placeholder="Surname"
                        />
                </div>
                <div className="form-group">
                    <label className="label">Email</label>
                        <input 
                        type="text" 
                        className="input" 
                        class="form control"
                        value={ email } 
                        onChange={ (e) => setEmail(e.target.value) }
                        placeholder="Email"
                        />
                </div>
                    <div className="form-group">
                        <button className="button is-primary">Save</button>
                    </div>
            </form>
        </div>
    )
}

export default Adduser