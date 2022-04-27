import React, { useState, Component } from 'react'
import axios from 'axios';

import Navigationbar from '../components/Navigationbar'
import {toast} from 'react-toastify'
//import { useNavigate } from 'react-router-dom';
// function Createuser() {

// const [loading, setloading] = useState(false);
// const [title, setTitle] = useState("");
// const [name, setName] = useState("");
// const [surname, setSurname] = useState("");
// const [email, setEmail] = useState("");
// const [city, setCity] = useState("");


//navigate


// const navigate = useNavigate()

// const handleSubmit = async(e) => {
//     e.preventDefault();
//     try{
//         setloading(true);

//         //see that form is sending data 
//         // console.table({title,name,surname,email,city})

//         //handle data and send to backend
//         const {data} = await axios.post('/odianjo/create/',{
//           title,name,email,city,surname  });
//           console.log("FETCHED >", data)
//         setName("");
//         setSurname("");
//         setEmail("");
//         setCity("");
//         setTitle("");      
//         setloading(false);
//         toast.dark("User created successfully!")
//         navigate('/')
//     }catch(err){
//         console.log(err);
//         setloading(false)
//        toast.error(err.message)
//     }
// } 






//   return (
//     <div>
//         <Navigationbar/>


//     {/* USER CREATION FORM */}

//     <div class="animate-pulse min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
//         <span class="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">Create User</span>
//   <div class="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
//         <form onSubmit={handleSubmit}>
//             <label for="name" class="block">Name</label>
//             <input value={name} npm install axios
//             <input type="text" value={title} onChange={e=>setTitle(e.target.value)}  class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Your Title"/>
//             <label for="" class="block">Surname</label>
//             <input type="text"  value={surname} onChange={e=>setSurname(e.target.value)} class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Your surname"/>
//             <label for="" class="block">City</label>
//             <input type="text"  value={city} onChange={e=>setCity(e.target.value)} class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Your city"/>
//             <label for="" class="block">Email</label>
//             <input type="Email"  value={email} onChange={e=>setEmail(e.target.value)} class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Your email"/>
           
// 					<div class="flex items-start">
					
// 						</div>
//           <button type="submit" class="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded">Create User</button>
//         </form>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Createuser




// export default class Create extends Component {
  
//     constructor(props) {
//         super(props);
//         this.onChangeTitle = this.onChangeTitle.bind(this);
//         this.onChangeName = this.onChangeName.bind(this);
//         this.onChangeSurname = this.onChangeSurname.bind(this);
//         this.onChangeEmail = this.onChangeEmail.bind(this);
//         this.onChangeCity = this.onChangeCity.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
        
      
//         this.state = {
//             title: '',
//             name: '',
//             surname: '',
//             email: '',
//             city: ''
//         }
      
//     }





//     onChangeTitle(e) {
//         this.setState({
//             title: e.target.value
//         });
//     }
//     onChangeName(e) {
//         this.setState({
//             name: e.target.value
//         });
//     }
//     onChangeSurname(e) {
//       this.setState({
//           surname: e.target.value
//       });
//       }
//       onChangeEmail(e) {
//         this.setState({
//             email: e.target.value
//         });
//     }
//     onChangeCity(e) {
//       this.setState({
//           city: e.target.value
//       });
//     }
    
//     onSubmit = async e => {
//         e.preventDefault();
//         try{
//         const users = {
//             title: this.state.title,
//             name: this.state.name,
//             surname: this.state.surname,
//             email: this.state.email,
//             city: this.state.city
//         }
        
        
//         axios.post('https://mi-linux.wlv.ac.uk/~2057147/odianjo/public/odianjo/create', users,{ crossdomain: true } , {method: 'post'})
//         .then(res => console.log(res.data));

//         toast.dark("User created successfully!")

//       }catch(err){
//                   console.log(err);
              
//                 toast.error(err.message)
//              }
//         this.setState({
//             title: '',
//             name: '',
//             surname: '',
//             email: '',
//             city: ''
//         });

    
//     }

const Createuser = () => {
  // let history = useHistory(); // Use for Navigate on Previous
  const [user, setUser] = useState({
    title: "",
    name: "",
    surname: "",
    email: "",
    city: ""
  });

  const { title, name, surname, email, city} = user;
  
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://mi-linux.wlv.ac.uk/~2057147/odianjo/public/odianjo/create",user, );
    alert('Data Inserted');
    // history.push("/");
  };



   
        return (
          <div>
          <Navigationbar/>
               <div class="animate-pulse min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
         <span class="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">Create User</span>
        <div class="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md"> 
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text" className="form-control" class="border w-full h-10 px-3 mb-5 rounded-md" name="title" value={title} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Surname: </label>
                        <input type="text" className="form-control" class="border w-full h-10 px-3 mb-5 rounded-md" name="name" value={name} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" className="form-control" class="border w-full h-10 px-3 mb-5 rounded-md" name="surname" value={surname} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" className="form-control" class="border w-full h-10 px-3 mb-5 rounded-md" name="email" value={email} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input type="text" className="form-control" class="border w-full h-10 px-3 mb-5 rounded-md" name="city" value={city} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Data" className="btn btn-danger" class="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded"/>
                    </div>
                </form>
            </div>
            </div>
          
            </div>
           
           )
    }
  
  export default Createuser;