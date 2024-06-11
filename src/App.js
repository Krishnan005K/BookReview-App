
import './App.css';

import WithLoading from './components/WithLoading';

import Navbar from './components/navbar';

const WrappedComponentWithLoading = WithLoading(Navbar);
function App() {
  return (
    <div className="App">
    <WrappedComponentWithLoading />
    {/* <SearchBooks/> */}
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

