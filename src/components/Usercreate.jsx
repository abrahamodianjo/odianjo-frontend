import React, { useState, useEffect } from "react";
import axios from 'axios';


//import { useHistory } from "react-router-dom";

const Userscreate = () => {
  // let history = useHistory(); // Use for Navigate on Previous
  const [users, setUsers] = useState({
    title: "",
    name: "",
    surname: "",
    email: "",
    city: ""
    
  });

  const { title, name, surname, email, city} = users;
  
  const onInputChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.title });
  };
  
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://mi-linux.wlv.ac.uk/~2057147/odianjo/public/users/create",users);
    alert('Data Inserted');
    // history.push("/");
  };
  return (
    <div className="container bg-light">
      <div class="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Title"
              name="tile"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="surname"
              name="surname"
              value={surname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter city"
              name="city"
              value={city}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  </div>  
  );
};

export default Userscreate;
