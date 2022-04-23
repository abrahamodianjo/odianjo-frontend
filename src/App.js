import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Createuser from './pages/Createuser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {



  return (
    <>
<ToastContainer/>




  <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/create-user" element={<Createuser/>} />

  </Routes>
  </>
  );

}

export default App;
