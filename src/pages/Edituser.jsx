import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Edituser = () => {
  
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`https://mi-linux.wlv.ac.uk/~2057147/odianjo/public/odianjo/update/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://mi-linux.wlv.ac.uk/~2049685/codei3/get_product/${id}`);
    setUser(result.data);
    
    
  };

return(
    <div>
      
    </div>
)
}

export default Edituser;
