import React, { useState } from 'react'
//import react and use state librabry from react 
import axios from "axios";
//import axios from axios library 

//create a const for Adduser.js 
const Adduser = () => {
    //set the use state for each params from the database. Therefore allowing a new user to be created through the rest API
const [name, setName] = useState('');
const [surname, setSurname] = useState('');
const [email, setEmail] = useState('');





//create a handleSubmit function with async 
const handleSubmit = async (e) => {
        e.preventDefault();
            //set the axios functiomn to post dat using the URL and the Use state declaration
            await axios.post('http://mi-linux.wlv.ac.uk/~2057147/abraham/public/abraham/create/',{
            name: name,
            surname: surname,
            email: email
        });   
}


    return (
       
        <div  className="container" >
            <form data-testid="adduser-1" className=" col-auto mt-3" method="post" onSubmit={ handleSubmit }>
                <div className="field mt-3">
                 
                    <input 
                        type="text" 
                        className=" form-control" 
                        value={ name } 
                        onChange={ (e) => setName(e.target.value) }
                        placeholder="Name"
                    />
                </div>
                <div className="field mt-3">
                   
                        <input 
                        type="text" 
                        className="input form-control" 
                        value={ surname } 
                        onChange={ (e) => setSurname(e.target.value) }
                        placeholder="Surname"
                        />
                </div>
                <div className="form-group field mt-3">
                 
                        <input 
                        type="text" 
                        className="input form-control" 
                        value={ email } 
                        onChange={ (e) => setEmail(e.target.value) }
                        placeholder="Email"
                        />
                </div>
                    <div className="field mt-3">
                        <button className="btn btn-dark">Save</button>
                    </div>
            </form>
        </div>
    )
}

export default Adduser