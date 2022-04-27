import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

// function Userlist() {
// const [userId,setUserId] = useState('')
// const [username,setUserName] = useState('')
// const [email,setEmail] = useState('')
// const [surname,setSurname] = useState('')
// const [city,setCity] = useState('')
// const [loading, setLoading] = useState(false)
// const [user,setUser] = useState([])
// useEffect(()=>{

//     FetchUsers()
// },[])

// //Send req to backend 
// const FetchUsers = async() =>{
// try {
//     setLoading(true)
//     const {data} = await axios.get(`/odianjo`, {headers: {'Access-Control-Allow-Origin': '*'}})
//     console.log("FETCHED >", data)
//     setUserId(data.id);
//     setUserName(data.name);
//     setEmail(data.email);
//     setSurname(data.surname);
//     setCity(data.city);
//     setUser(data);
//     setLoading(false)
// } catch (error) {
//     console.log(error)
//     setLoading(false)
// }



// }

const Userlist = () => {
  const [users, setUser] = useState([]);
  const [loading] = useState(false)
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
  
    const result = await axios.get("https://mi-linux.wlv.ac.uk/~2057147/odianjo/public/odianjo");
    setUser(result.data.reverse());
  };

  const deleteUser = (Id) =>
  {
    axios.delete('https://mi-linux.wlv.ac.uk/~2057147/odianjo/public/odianjo/delete_users/'+Id)
    .then((result)=>{
      loadUsers();
    })
    .catch(()=>{
      alert('Deleted');
    });
  };
  








  return (
    <><div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="bg-white pb-4 px-4 rounded-md w-full">
      <div className="flex justify-between w-full pt-6 ">
        <p className="ml-3 font-bold text-gray-700"> All Users</p>
      </div>
      <div className="w-full flex justify-end px-2 mt-2">

      </div>
      <div className="overflow-x-auto mt-6">

        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{ fontSize: "0.9674rem" }}>
              <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Name </th>
              <th className="px-4 py-2" style={{ backgroundColor: "#f8f8f8" }}>Surname</th>
              <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Title </th>
              <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Email</th>
              <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>City</th>
              <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>delete</th>
              <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>update</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            {loading ? <svg role="status" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg> : users && users.map((users) => <tr key={users.id} className="hover:bg-gray-100 border-b border-gray-200 py-10">
              <td className="px-4 py-4">{users.name}</td>
              <td className="px-4 py-4">{users.surname}</td>
              <td className="px-4 py-4">{users.title}</td>
              <td className="px-4 py-4">{users.email}</td>
              <td className="px-4 py-4">{users.city}</td>
              <td className="px-4 py-4">
              <Link to={`/odianjo/edit/${users.id}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              </Link>
              </td>
              <td className="px-4 py-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
             </td>
              
            </tr>
            )}


          </tbody>
        </table>
      </div>

    </div>
    </div>
    </>

  )
}

export default Userlist