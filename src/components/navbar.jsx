import Login from "./login";
import Register from "./signup";
import '../assets/styles/navbar.css'
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import RegistrationSuccess from "./regissucc";

function Home()
{
    return(
        <div style={{
            backgroundColor:'lightgreen'
        }}>
            <h1> This is my Home Page</h1>
        </div>
    )
}
function Navbar()
{
    return (
        <Router>

            <nav>
                <ul>
                    <li ><Link to='/' className='navlink'>HOME</Link></li>
                    <li ><Link to='/login' className='navlink'>LOGIN</Link></li>
                    <li ><Link to='/register'className='navlink'>REGISTER</Link></li>

                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/home' element={<Home/>} />
            <Route exact path='/register' element={<Register/>} />
            <Route exact path='/registersucess' element={<RegistrationSuccess/> } />

            </Routes>
        </Router>
    )
}
export default Navbar;