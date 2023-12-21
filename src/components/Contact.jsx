import React from 'react';
import logo from '../assets/images/bookLogo.png'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div style={{ background: 'rgba(100, 65, 48,0.6)', color: 'white', paddingTop: '50px', paddingBottom: '50px' }}>
      <Container>
        <h2 style={{ marginBottom: '30px' }}>Contact Us</h2>
        <Row>
          <Col md={6}>
            <p>
              Have a question or want to get in touch? We'd love to hear from you!
            </p>
            <p>
              Feel free to drop us a message using the form below.
            </p>
            <br/>
            <img  src={logo}/>
          </Col>
          <Col md={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="   your name" required />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="   email" required />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="   subject" required />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="   your message" required />
              </Form.Group>

              <Button variant="primary" type="submit" className='glow-on-hover'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsPage;
