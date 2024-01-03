import React from 'react';
import logo from '../assets/images/bookLogo.png'
import { Container } from 'react-bootstrap';

const AboutUsPage = () => {
  return (
    <Container style={{
        backgroundColor:'rgba(100, 65, 48,0.6)',
        color:'white',
        width:'800px'
    }}>
      <h2>About Us</h2>
     <br/> <h2>
        <img src={logo}/>
        <hr/>
Welcome to bAb, Your Portal to the World of Books!</h2>

<div style={{marginLeft:'-420px'}}>
<h3 style={{}}>Fuel your Reading Journey:</h3>
</div>
<p>bAb aims to be your personal compass in the vast literary landscape. Through curated recommendations, insightful reviews, and engaging discussions, we'll help you find your next great read, whether it's a nostalgic childhood favorite or a groundbreaking new release.</p>

<h3 >Ignite the Spark of Conversation:</h3>


<p>Books are meant to be shared, analyzed, and debated. bAb provides a platform for passionate readers to dive deep into the written word, exchange perspectives, and form meaningful connections over shared literary experiences.</p>

<h3 >Empower Informed Readers:</h3>

<p>Every review on bAb is a stepping stone. We champion thoughtful critique, encouraging users to analyze plot, characters, writing style, and themes, fostering a deeper understanding and appreciation for the art of storytelling.</p>

<h3 >Celebrate the Magic of Books:</h3>

<p>From captivating classics to hidden gems, bAb embraces the diversity of literature. We believe every book has a story to tell, and we want to create a space where all genres and voices are valued and celebrated.</p>
{/* <center>
<h2 >Dive into the Content:</h2></center> */}

<h3 >Comprehensive Reviews:</h3>

<p>Go beyond star ratings! Our passionate reviewers delve into the heart of each book, analyzing plot, themes, characters, and writing style to provide you with a nuanced understanding of the reading experience.</p>

<h3 >Personalized Recommendations:</h3>

<p>Tired of endless "to-read" lists that go nowhere? bAb's intelligent algorithm takes your preferences into account to suggest stories you'll truly love, ensuring your next read is a guaranteed page-turner.</p>

<h3 >Thriving Community:</h3>

<p>Join book clubs, participate in author Q&As, and engage in lively discussions with fellow readers who share your passion for the written word. Discover new perspectives, broaden your horizons, and forge lasting friendships along the way.</p>

<h3 >Interactive Features:</h3>

<p>Share your own reviews, recommend hidden gems, and contribute to our ever-growing literary database. At bAb, you're not just a reader – you're an active participant in shaping the future of book discovery.</p>
<center>
<p >bAb is more than just an app; it's a vibrant community, a literary playground, and a launchpad for lifelong reading adventures. So, grab your favorite book, curl up with your smartphone, and join us on this incredible journey – it's time to unlock the endless possibilities that lie within the pages!</p>
</center>
    </Container>
  );
};

export default AboutUsPage;
