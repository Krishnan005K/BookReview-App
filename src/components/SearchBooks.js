import React, { useState, useEffect } from 'react';
import '../assets/styles/style.css'
import { Card, CardContent, CardMedia, Typography, Grid, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BookFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.docs);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAuthorFilterChange = (event) => {
    setAuthorFilter(event.target.value);
  };

  const handleGenreFilterChange = (event) => {
    setGenreFilter(event.target.value);
  };

  const applyFilters = () => {
    fetchBooks();
    setSearchTerm('');
  };

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://openlibrary.org/books/OL7353617M.json');
      if (response.ok) {
        const data = await response.json();
        let filteredResults = data.details.details; // Replace with actual data structure from API

        if (authorFilter) {
          filteredResults = filteredResults.filter(book => book.author === authorFilter);
        }

        if (genreFilter) {
          filteredResults = filteredResults.filter(book => book.genre === genreFilter);
        }

        setSearchResults(filteredResults);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []); // Fetch books on initial render

  return (
    <div>
      <TextField
        label="Search Books"
        variant="filled"
        className='search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <div>
        <TextField
          label="Filter by Author"
          variant="filled"
          className='search1'
          value={authorFilter}
          onChange={handleAuthorFilterChange}
        />
        <TextField
          label="Filter by Genre"
          variant="filled"
          className='search1'
          value={genreFilter}
          onChange={handleGenreFilterChange}
        />
        <button  onClick={applyFilters}>Apply Filters</button>
      </div>
      <br/>
      <Grid container spacing={3}>
        {searchResults.map((book, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
           <Link to='/review' className='navlink'> <Card>
              <CardMedia
                component="img"
                height="270"
                image={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={book.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {book.author_name ? `Author: ${book.author_name.join(', ')}` : 'Author information not available'}
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BookFilters;
