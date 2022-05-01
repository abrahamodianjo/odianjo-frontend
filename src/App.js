import React from 'react'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Userlist from './Userlist';
import Adduser from './Adduser';
import Edituser from './Edituser';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
  
    <Router>
          <div className='container'>
          <Routes>
          <Route exact path='/' element={<Userlist />} />
          <Route exact path='/add' element={<Adduser />} />
          <Route exact path='/edit/:id' element={<Edituser />} />

          </Routes>

      </div>
    </Router>  

  )
}

export default App;