//import react, use state and use effect from react component
import React, {useState, useEffect} from 'react'
//import axios from 'axios' after installing it via commanad linbe 
import axios from 'axios'
//import react router doom to use the Link tag
import { Link,  } from 'react-router-dom';


// create the constant variables
const Userlist = () => {
    //set users and setUsers to use state component for users list 
    const [users, SetUsers] = useState([]);
        //declare the use ffect component to get users to fetch the list of users 
    useEffect(() => { getUsers();}, [])
    // set the getUsers method to fetch the userlist
    const getUsers = async() =>{
        //const the users to GET request and display the data from the database server
        const users = await axios.get('http://mi-linux.wlv.ac.uk/~2057147/abraham/public/abraham');
        SetUsers(users.data);
    }
    //using get GET request to delete data from the database server by getting th user ID 
    const deleteUsers = async(id) =>{ await axios.get(`http://mi-linux.wlv.ac.uk/~2057147/abraham/public/abraham/delete/${id}`)
getUsers();
    }

return (
    <div >
      {/*create a responsive space div tag*/}
     <div className='mt-5 mb-4 table-responsive'>  
     {/*Declare the table tag, make a it a container, set a border line, and then include the data test id to test the data  */}
    <table className='table table-dark table-striped container table-hover' 
 data-testid="userlist-1">
     {/*set the table content */}
        <thead className='thead-primary'>
            <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Surname </th>
                    <th> Email </th>
                    <th> Action </th>
            </tr>
        </thead>
                <tbody>
                    {/* maps how the get request to display the details on the database server */}
        {users.map((user, index) => (
                        <tr key={user.id}>
                            <td> {index + 1} </td>
                                <td> {user.name} </td>
                                <td> {user.surname} </td>
                                <td> {user.email} </td>
                            <td>
                                <td>
                                    {/* the edit button that gets the user details through the ID*/}
                        <Link to={`/edit/${user.id}`} className='btn btn-dark text-decoration-none'>Edit</Link>
                        </td>
                        <td>
                            {/*this is the delete button, it will display on each component that is displayed  */}
                        <button onClick={()=> deleteUsers(user.id)} className='btn btn-dark text-decoration-none'> Delete </button>
                        </td>
                        </td>
                    </tr>

                ))}

            </tbody>
        </table>
      
        </div>
        
    </div>
    )
}

    export default Userlist



