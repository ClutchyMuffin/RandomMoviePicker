import React, { useState } from 'react';
import './App.css';

const RandomMoviePicker = () => {
    const [movie, setMovie] = useState({
        imgSrc: 'assets/blank-image.jpg',
        description: 'Movie Description'
    });

    const handleButtonClick = () => {
        // Implement your logic to get a random movie here
        // For example, updating the movie state with a new image and description
        setMovie({
            imgSrc: 'assets/random-movie-image.jpg',
            description: 'This is a random movie description.'
        });
    };

    return (
        <div className="top">
            <h2 id="title">Random Movie Picker</h2>
            <button id="button" onClick={handleButtonClick}>Get a Random Movie</button>

            <div className="movieDetails">
                <img src={movie.imgSrc} id="movieImg" height="500" alt="Movie Poster" />
                <h3 id="movieInfo">{movie.description}</h3>
            </div>
        </div>
    );
};

export default RandomMoviePicker;
