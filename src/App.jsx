import React, { useState } from 'react';
import defaultImage from './assets/blank-image.jpg';
import './App.css';

const RandomMoviePicker = () => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Replace with your valid API key

    const [movie, setMovie] = useState({
        title: 'Movie Title',
        imgSrc: defaultImage,
        releaseYear: '<None>',
        genre: '<None>',
        director: '<None>',
        rating: '<None>',
        link: '<None>'
    });

    const handleButtonClick = async () => {
        try {
            
            // Fetch a random page number
            const page = Math.floor(Math.random() * 500) + 1;
            
            // Get a list of popular movies on that random page
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Pick a random movie
            const data = await response.json();
            const movies = data.results;
            const randomMovie = movies[Math.floor(Math.random() * movies.length)];

            // Update state with the movie details
            setMovie({
                title: randomMovie.title || 'N/A',
                imgSrc: randomMovie.poster_path ? `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}` : defaultImage,
                releaseYear: randomMovie.release_date ? randomMovie.release_date.split('-')[0] : 'N/A',
                genre: randomMovie.genre_ids.length > 0 ? randomMovie.genre_ids.join(', ') : 'N/A',
                rating: randomMovie.vote_average || 'N/A',
                link: `https://www.themoviedb.org/movie/${randomMovie.id}` || 'N/A'
            });

        } catch (error) {
            console.error("Error fetching movie data: ", error.message);
            setMovie({
                title: 'Error',
                imgSrc: defaultImage,
                releaseYear: 'N/A',
                genre: 'N/A',
                rating: 'N/A',
                link: 'N/A'
            });
        }
    };

    return (
        <div>
            <div className="top">
                <h2 id="title">Random Movie Picker</h2>
                <button id="button" onClick={handleButtonClick}>Get a Random Movie</button>
            </div>

            <div className="movieDetails">
                <img src={movie.imgSrc} id="movieImg" height="500" alt="Movie Poster" />
                <div className="movieInfoContainer">
                    <h4 id="movieTitle">{movie.title}</h4>
                    <p>Release Year: <span id="releaseYear">{movie.releaseYear}</span></p>
                    <p>Genre: <span id="genre">{movie.genre}</span></p>
                    <p>Rating: <span id="rating">{movie.rating}</span></p>
                    <p>Link: <a id="link" href={movie.link} target="_blank" rel="noopener noreferrer">{movie.link}</a></p>
                </div>
            </div>
        </div>
    );
};

export default RandomMoviePicker;