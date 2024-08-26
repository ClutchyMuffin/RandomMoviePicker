import React, { useState } from 'react';
import './App.css';

const RandomMoviePicker = () => {
    const [movie, setMovie] = useState({
        title: 'Movie Title',
        imgSrc: 'assets/blank-image.jpg',
        releaseYear: '',
        genre: '',
        director: '',
        rating: '',
        description: 'Movie Description'
    });

    const handleButtonClick = () => {
        setMovie({
            title: 'Random Movie Title',
            imgSrc: 'assets/blank-image.jpg',
            releaseYear: 'NA',
            genre: 'NA',
            director: 'NA',
            rating: 'NA',
            description: 'This is a Random Movie Description'
        });
    };

    return (
        <div>
            
            <div class="top">
                <h2 id="title">Random Movie Picker</h2>
                <button id="button" onClick={handleButtonClick}>Get a Random Movie</button>
            </div>

            <div className="movieDetails">
                <img src={movie.imgSrc} id="movieImg" height="500" alt="Movie Poster" />
                <div>
                    <h4 id="movieTitle">{movie.title}</h4>
                    <p><strong>Release Year:</strong> <span id="releaseYear">{movie.releaseYear}</span></p>
                    <p><strong>Genre:</strong> <span id="genre">{movie.genre}</span></p>
                    <p><strong>Director:</strong> <span id="director">{movie.director}</span></p>
                    <p><strong>Rating:</strong> <span id="rating">{movie.rating}</span></p>
                    <p><strong>Description:</strong> <span id="description">{movie.description}</span></p>
                </div>
                    
            </div>

        </div>

    );
};

export default RandomMoviePicker;
