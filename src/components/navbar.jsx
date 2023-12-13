import Login from "./login";
import Register from "./signup";
import '../assets/styles/navbar.css'
import logo from'../assets/images/bookLogo.png'
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import RegistrationSuccess from "./regissucc";
import Dynamic from "./dynamicrender";

function Home()
{
    return(
        <div style={{
            marginTop:'60px',
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
            <header>
            <nav className="navbar">
                <h2 className="logo"><img src={logo} className="logo"></img> &nbsp;BOOK</h2>
                <ul className="all-links">
                    <li ><Link to='/' className='navlink'>HOME</Link></li>
                    <li ><Link to='/login' className='navlink'>LOGIN</Link></li>
                    <li ><Link to='/register'className='navlink'>REGISTER</Link></li>

                </ul>
            </nav>
            </header>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/home' element={<Home/>} />
            <Route exact path='/register' element={<Register/>} />
            <Route exact path='/registersucess' element={<RegistrationSuccess/> } />
            <Route exact path='/loginsucess' element={<Dynamic/> } />
            
            </Routes>
        </Router>
    )
}
export default Navbar;