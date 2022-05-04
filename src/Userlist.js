import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link,  } from 'react-router-dom';



const Userlist = () => {
    const [users, SetUsers] = useState([]);

    useEffect(() => { getUsers();}, [])

    const getUsers = async() =>{

        const users = await axios.get('http://mi-linux.wlv.ac.uk/~2057147/abraham/public/abraham');
        SetUsers(users.data);
    }

    const deleteUsers = async(id) =>{ await axios.get(`http://mi-linux.wlv.ac.uk/~2057147/abraham/public/abraham/delete/${id}`)
getUsers();
    }

return (
    <div >
      
     <div className='mt-5 mb-4 table-responsive'>  
    <table className='table is-bordered is-striped is-narrow is-hoverable container' 
 data-testid="userlist-1">
        <thead>
            <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Surname </th>
                    <th> Email </th>
                    <th> Action </th>
            </tr>
        </thead>
                <tbody>
        {users.map((user, index) => (
                        <tr key={user.id}>
                            <td> {index + 1} </td>
                                <td> {user.name} </td>
                                <td> {user.surname} </td>
                                <td> {user.email} </td>
                            <td>
                                <td>
                        <Link to={`/edit/${user.id}`} className='btn btn-dark text-decoration-none'>Edit</Link>
                        </td>
                        <td>
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



