import Login from "./login";
import Register from "./signup";
import '../assets/styles/navbar.css'
import logo from'../assets/images/bookLogo.png'
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import RegistrationSuccess from "./regissucc";
import Dynamic from "./dynamicrender";
import Home from "./Home";
import Horror from "./Horror";
import Review from "./review";
import Footer from "./footer";
import ContactUsForm from "./Contact";
import AboutUsPage from "./About";


function Navbar()
{
    return (
        <Router>
            <header>
            <nav className="navbar">
                <h2 className="logo"><img src={logo} className="logo" /></h2>
                <ul className="all-links">
                    <li ><Link to='/' className='navlink'>Home</Link></li>
                    <li className="navlink"><Link to='/about'>About</Link></li>
                    <li className="loggg" ><Link to='/login' className='navlink'>&nbsp;&nbsp;Login&nbsp;&nbsp;</Link></li>
                   
                    

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
            <Route exact path='/horror' element={<Horror/>}/>
            <Route exact path='/footer' element={<Footer/>}/>
            <Route exact path='/review' element={<Review/>}/>
            <Route exact path='/contact' element={<ContactUsForm/>}/>
            <Route exact path='/about' element={<AboutUsPage/>}/>

            </Routes>
        </Router>
    )
}
export default Navbar;

