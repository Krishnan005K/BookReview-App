import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const cardsData = [
  {
    title: 'Harry Pottor',
    image: 'https://covers.libro.fm/9781781102664_1120.jpg',
    description: 'This is the first card.',
    route:'/review',
  },
  {
    title: 'IT - The Ghost',
    image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg',
    description: 'This is the second card.',
    route:'/review',
  }, 
  {
    title: 'Harry Pottor',
    image: 'https://covers.libro.fm/9781781102664_1120.jpg',
    description: 'This is the first card.',
    route:'/review',
  },
  {
    title: 'IT - The Ghost',
    image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg',
    description: 'This is the second card.',
    route:'/review',
  },
  {
    title: 'Harry Pottor',
    image: 'https://covers.libro.fm/9781781102664_1120.jpg',
    description: 'This is the first card.',
    route:'/review',
  },
  {
    title: 'IT - The Ghost',
    image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg',
    description: 'This is the second card.',
    route:'/review',
  },
  {
    title: 'Harry Pottor',
    image: 'https://covers.libro.fm/9781781102664_1120.jpg',
    description: 'This is the first card.',
    route:'/review',
  },
  {
    title: 'IT - The Ghost',
    image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg',
    description: 'This is the second card.',
    route:'/review',
  },
 
];

const Horror = () => {
  return (
   
    <Grid container spacing={3}>

        <div style={{
            marginTop:'60px',
            width:'100%',
            height:'50px',
            backgroundColor:'rgba(100, 65, 48,0.6)',
            color:'whitesmoke'
        }}>
            <h1>YOUR FAVORITE GENRE BOOKS</h1>
        </div>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
            <Link to={card.route}>
          <Card>
            <CardMedia
              component="img"
              height="270"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {card.title}
              </Typography>
             
            </CardContent>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Horror;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

// const cardsData = [
//   {
//     title: 'Harry Pottor',
//     image: 'https://covers.libro.fm/9781781102664_1120.jpg',
//     description: 'This is the first card.',
//     route:'/review',
//   },
//   {
//     title: 'IT - The Ghost',
//     image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg',
//     description: 'This is the second card.',
//     route:'/review',
//   }, 
//   {
//     title: 'Harry Pottor',
//     image: 'https://covers.libro.fm/9781781102664_1120.jpg',
//     description: 'This is the first card.',
//     route:'/review',
//   },
//   {
//     title: 'IT - The Ghost',
//     image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg',
//     description: 'This is the second card.',
//     route:'/review',
//   },
//   {
//     title: 'Harry Pottor',
//     image: 'https://covers.libro.fm/9781781102664_1120.jpg',
//     description: 'This is the first card.',
//     route:'/review',
//   },
//   {
//     title: 'IT - The Ghost',
//     image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg',
//     description: 'This is the second card.',
//     route:'/review',
//   },
//   {
//     title: 'Harry Pottor',
//     image: 'https://covers.libro.fm/9781781102664_1120.jpg',
//     description: 'This is the first card.',
//     route:'/review',
//   },
//   {
//     title: 'IT - The Ghost',
//     image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg',
//     description: 'This is the second card.',
//     route:'/review',
//   },
 
// ];

// const Horror = () => {
//   return (
   
//     <Grid container spacing={3}>

//         <div style={{
//             marginTop:'60px',
//             width:'100%',
//             height:'50px',
//             backgroundColor:'rgba(100, 65, 48,0.6)',
//             color:'whitesmoke'
//         }}>
//             <h1>YOUR FAVORITE GENRE BOOKS</h1>
//         </div>
//       {cardsData.map((card, index) => (
//         <Grid item xs={12} sm={6} md={3} key={index}>
//             <Link to={card.route}>
//           <Card>
//             <CardMedia
//               component="img"
//               height="270"
//               image={card.image}
//               alt={card.title}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h6" component="div">
//                 {card.title}
//               </Typography>
             
//             </CardContent>
//           </Card>
//           </Link>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default Horror;
