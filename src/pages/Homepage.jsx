import React from 'react'
import Navigationbar from '../components/Navigationbar'
import Userlist from '../components/Userlist'
// import Usercreate from '../components/Usercreate'

function Homepage() {
  return (<>
   <Navigationbar/>
    
    <Userlist/>
  
    {/* <Usercreate/> */}

   </>
  )
}

export default Homepage