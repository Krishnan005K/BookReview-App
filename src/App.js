
import './App.css';
import AboutUsPage from './components/About';
import ContactUsForm from './components/Contact';
import Home from './components/Home';
import WithLoading from './components/WithLoading';
import Footer from './components/footer';
import Cards from './components/grid';
import GroupExample from './components/grid';
import Layout from './components/grid';
import Navbar from './components/navbar';
import SingleCard from './components/review';
import Register from './components/signup';
import Slideshow from './components/slideshow';
// import Slideshow from './components/slideshow';
const WrappedComponentWithLoading = WithLoading(Navbar);
function App() {
  return (
    <div className="App">
    <WrappedComponentWithLoading />
    {/* <Register/> */}
     {/* <Navbar/> */}
   {/* <Footer/>
   <Cards/> */} 
   {/* <Home/> */}
   {/* <AboutUsPage/> */}
   {/* <ContactUsForm/> */}
   
  </div>
  );
}

export default App;

