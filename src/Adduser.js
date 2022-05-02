import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

 const Adduser = () => {
const [name, setName] = useState('');
const [surname, setSurname] = useState('');
const [email, setEmail] = useState('');
const navigate = useNavigate();


const handleSubmit = async (e) => {
        e.preventDefault();
  
            await axios.post('http://mi-linux.wlv.ac.uk/~2057147/abraham/public/abraham/create/',{
            name: name,
            surname: surname,
            email: email
        }, {
                   
                    headers: {"Content-Type":"application/json"},
                     headers: {"Access-Control-Allow-Origin": "*"},
                     headers: {"Access-Control-Allow-Headers": "X-API-KEY, Origin,X-Requested-With, Content-Type, Accept, Access-Control-Requested-Method, Authorization"},
                     headers: {"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PATCH, PUT, DELETE"},
                     body: JSON.stringify(name, surname, email)
                });
            navigate("/");
          
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import  {useState} from 'react';

// const Adduser = () =>{
//     const [name, setName] = useState('');
//     const [surname, setSurname] = useState('');
//     const [email, setEmail] = useState('');
//     const [pending, setPending] = useState(false);

//      const handleSubmit = (e) => {
//          e.prevenDefault();
//       const odianjodata = {name, surname, email};
//         setPending(true);

//         fetch("http://mi-linux.wlv.ac.uk/~2057147/abraham/public/abraham/create",  {
//             method: 'POST',
//             headers: {"Content-Type":"application/json"},
//             // headers: {"Access-Control-Allow-Origin": "*"},
//             // headers: {"Access-Control-Allow-Headers": "X-API-KEY, Origin,X-Requested-With, Content-Type, Accept, Access-Control-Requested-Method, Authorization"},
//             // headers: {"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PATCH, PUT, DELETE"},
//              body: JSON.stringify(odianjodata)
//         }).then(() => {
//             console.log('New User Added');
//             setPending(false);
//         })
//      }
    
        // ////////////////////////////////////////////////////////////////////////////////////////////////////////// POST request using fetch with error handling
        // const users = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ odianjodata })
        // };
        // fetch('http://mi-linux.wlv.ac.uk/~2057147/abraham/public/abraham/create', users)
        //     .then(async response => {
        //         const isJson = response.headers.get('content-type')?.includes('application/json');
        //         const data = isJson && await response.json();
    
        //         // check for error response
        //         if (!response.ok) {
        //             // get error message from body or default to response status
        //             const error = (data && data.message) || response.status;
        //             return Promise.reject(error);
        //         }
    
        //         this.setState({ odianjodata })
        //     })
        //     .catch(error => {
        //         this.setState({ errorMessage: error.toString() });
        //         console.error('There was an error!', error);
        //     });
    
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div  class="container">
            <form  class=" col-auto mt-3" onSubmit={ handleSubmit }>
                <div className="field mt-3">
                 
                    <input 
                        type="text" 
                        className="input" 
                        class="form-control"
                        value={ name } 
                        onChange={ (e) => setName(e.target.value) }
                        placeholder="Name"
                    />
                </div>
                <div className="field mt-3">
                   
                        <input 
                        type="text" 
                        className="input" 
                        class="form-control"
                        value={ surname } 
                        onChange={ (e) => setSurname(e.target.value) }
                        placeholder="Surname"
                        />
                </div>
                <div className="form-group field mt-3">
                 
                        <input 
                        type="text" 
                        className="input" 
                        class="form-control"
                        value={ email } 
                        onChange={ (e) => setEmail(e.target.value) }
                        placeholder="Email"
                        />
                </div>
                    <div className="field mt-3">
                        <button class="btn btn-dark">Save</button>
                    </div>
            </form>
        </div>
    )
}

export default Adduser