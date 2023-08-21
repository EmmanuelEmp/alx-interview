#!/usr/bin/node

const request = require('request');

// Get the Movie ID from the command line argument. Getting it at position 3

const movieId = process.argv[2]; 
// Construct the URL for the specific film
const movieUrl = `https://swapi-api.hbtn.io/api/films/${movieId}/`; 

request(movieUrl, {json: true}, (err, response, movieData) => {
  // checking for possible errors

  if(err){
    console.error('Error:', err)
  } else if(response.statusCode !== 200) {
      console.error('StatusCode:', response.statusCode);
  } else{
      const characters = [];
      // iterating through the api and then fetching movies characters
      movieData.characters.forEach(charUrl => { 
        request(charUrl, {json: true}, (charError, charResponse,  charData) => {
          if(charError){
            console.error('Oops! error fetching character', charError)
          } else{
            characters.push(charData.name);
          }
          // checking if characters length matches the movieData length
          if(characters.length === movieData.characters.length){
            characters.forEach(name => {
              console.log(name);
            })
          }
        })
      });
  }
})