import BookFilters from "./SearchBooks";
import Footer from "./footer";
import Cards from "./grid";
import Slideshow from "./slideshow";

function Home()
{
    return(
        
        <div>
       
        <div>
            <Slideshow/>
            
        </div>
        <div>
        <div className="search">
            <BookFilters/>
            
        </div>
        <div style={{
            marginTop:'50px',
            backgroundColor:'rgba(100, 65, 48,0.6)',
            color:'white'
        }}>
       
        
           <h1>Choose your Genre to Explore</h1>
        </div>
        <br/>
        <br/>
            <Cards/>
        </div>
        <br/>
        <br/>
        <br/>
        
        <br/>
        <br/>
        <br/>
        
       
       
    <Footer/>
   
    </div>
    )
}
export default Home;