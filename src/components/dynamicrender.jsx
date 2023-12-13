import { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/styles/navbar.css'

function Dynamic()
{
    const [isloggedin,SetLogin]=useState(true)
    if(isloggedin)
    {
        return(
            <div style={{
                marginTop:'60px',
                color:'white'
                
            }}>
                <h1>Sucessfully Loggedin</h1>
                <br />
                <button>
                <Link to='/'> Go to HOME--</Link></button>
            </div>
        )
    }
    else{
        return(
            <div style={{
                marginTop:'50px',
                color:'white'
            }}>
                <h1>You are not Logged in</h1>
                <p>Click here to <button><Link to='/login' className="logg">Login</Link></button></p>
            </div>
        )
    }
}
export default Dynamic;