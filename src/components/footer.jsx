import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons library

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{
      color:'white'
    }} >
      <Container>
        <Row>
          <Col md={6}>
            <h5>Connect with Us</h5>
            <Nav className="social-icons">
              {/* Replace '#' with your actual social media links */}
              <Nav.Link href="#facebook"><FaFacebook /></Nav.Link>
              <Nav.Link href="#twitter"><FaTwitter /></Nav.Link>
              <Nav.Link href="#instagram"><FaInstagram /></Nav.Link>
              {/* Add more social links as needed */}
            </Nav>
          </Col>
          <Col md={2}>
            <h5>Navigation</h5>
            <Nav>
              {/* Replace '/about' and '/contact' with your actual routes */}
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            {/* Add contact information or additional links */}
            <h5>Contact Info</h5>
            <p>Krishnan K&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>krishnan@bab.com</p>
            {/* Add more contact information as needed */}
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} BaB. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
