import { useState } from 'react';

function Dashboard(){


    const [login,setLogin] = useState(false) /**  null , boolean , String , Array , Object , Symbol , Number  */


    return (
        <div>
        { login == true ? 
        
        <div>
        <p> Welcome to dashboard  </p>
        <button onClick={ ()=> setLogin(false) }>Signout</button> 
        </div> : 
        <div>
        <p> not connected </p>
        <button onClick={ ()=> setLogin(true) }>Login</button> 
        </div> }

        
        </div>
    )




}

export default Dashboard;