import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const cardsData = [
  {
    title: 'Popular',
    image: 'https://2.bp.blogspot.com/-I_i8Lnmf2jQ/Wt6D7bhqb-I/AAAAAAAANyM/n4Sxgi3DTKASnE4fkeRU_H08pwIJqGbSACEwYBhgL/s640/world%2Bof%2Bart%2B-%2Bpopular%2Bnovels.jpg',
    description: 'This is the first card.',
    route:'/horror',
  },
  {
    title: 'Adventure',
    image: 'https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2019/12/122119_YE_books_main.jpg?w=1030&ssl=1',
    description: 'This is the second card.',
    route:'/horror',
  },
  {
    title: 'Horror',
    image: 'https://www.housewifeeclectic.com/wp-content/uploads/2013/10/Scariest-Book-Covers-1.jpg',
    description: 'This is the third card.',
    route:'/horror',
  },
  {
    title: 'Comedy',
    image: 'https://pyxis.nymag.com/v1/imgs/1c8/661/2bd0b9f806d33059471602f222051234e4-05-eoy-comedy-books.rhorizontal.w1100.jpg',
    description: 'This is the third card.',
    route:'/horror',
  },
  {
    title: 'Romance',
    image: 'https://s26162.pcdn.co/wp-content/uploads/2019/02/Untitled-design-7-e1549305787606.jpg',
    description: 'This is the third card.',
    route:'/horror',
  },
  {
    title: 'Comics',
    image: 'https://wallpapercave.com/dwp1x/wp5488425.gif',
    description: 'This is the third card.',
    route:'/horror',
  },
];

const Cards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const cardStyle = {
    transition: 'transform 1.3s, box-shadow 0.3s',
    transformStyle: 'preserve-3d',
    transform: hoveredCard !== null && hoveredCard !== undefined
      ? 'rotateY(360deg)' // Flip on hover
      : 'rotateY(0deg)',
  };

  return (
    <Grid container spacing={3}>
      {cardsData.map((card, index) => (
        <Grid item xs={11} sm={6} md={4} key={index}>
         <Link to={card.route}>
          <Card
            onMouseOver={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
            style={index === hoveredCard ? cardStyle : {}}
          >
            <CardMedia
              component="img"
              height="200px"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {card.title}
              </Typography>
              {/* Add more content if needed */}
            </CardContent>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
