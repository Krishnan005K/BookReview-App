import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import slide1 from '../assets/images/slide1 (1).jpg'
import slide2 from '../assets/images/slide1 (2).jpg'
import slide3 from '../assets/images/slide1 (3).jpg'
function Slideshow() { 
return ( 
    <div style={{
        marginBottom:'35px',
        marginTop:'40px'
    }}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          style={{
            height:'400px'
          }}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          style={{
            height:'400px'
          }}
          

          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3} style={{
            height:'400px'
          }}
          
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
	</div>
); 
}
export default Slideshow;
