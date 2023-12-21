import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() !== '' && rating !== 0) {
      const reviewObj = {
        review: newReview,
        rating: rating,
      };
      setReviews([...reviews, reviewObj]);
      setNewReview('');
      setRating(0);
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <Card style={{ width: '24rem', 
    marginLeft:'500px'}}>
      <Card.Img variant="top" src="https://covers.libro.fm/9781781102664_1120.jpg" style={{
        height:'270px'
      }} />
      <Card.Body>
        <Card.Title>Harry Potter <br/>
        and the Goblet of Fire</Card.Title>
        <Card.Text>
        Harry Potter and the Goblet of Fire is a fantasy novel written by British author J. K. Rowling 
        </Card.Text>
        <div className="d-flex justify-content-between">
          <div>
            <p className="m-0">Average Rating: {reviews.length > 0 ? (reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length).toFixed(1) : '0.0'}</p>
            <p className="m-0">Reviews: {reviews.length}</p>
          </div>
          
        </div>
        <hr />
        <h6>Customer Reviews</h6>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p>Rating: {review.rating}</p>
              <p>{review.review}</p>
            </li>
          ))}
        </ul>
        <Form onSubmit={handleReviewSubmit}>
          <Form.Group controlId="ratingForm">
            <Form.Label>Select Rating:</Form.Label>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleRatingChange(star)}
                >
                  {star <= rating ? '★' : '☆'}
                </span>
              ))}
            </div>
          </Form.Group>
          <Form.Group controlId="reviewForm">
            <Form.Label>Add Review:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className='glow-on-hover'>
            Submit Review
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Review;
