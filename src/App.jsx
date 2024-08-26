import React, { useState } from 'react';
import defaultImage from './assets/blank-image.jpg';
import './App.css';

const RandomMoviePicker = () => {
    const [movie, setMovie] = useState({
        title: 'Movie Title',
        imgSrc: defaultImage,
        releaseYear: '<None>',
        genre: '<None>',
        director: '<None>',
        rating: '<None>',
        link: '<None>'
    });

    const handleButtonClick = () => {
        setMovie({
            title: 'Random Movie Title',
            imgSrc: defaultImage,
            releaseYear: 'N/A',
            genre: 'N/A',
            director: 'N/A',
            rating: 'N/A',
            link: 'N/A'
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
                <div className="movieInfoContainer">
                    <h4 id="movieTitle">{movie.title}</h4>
                    <p>Release Year: <span id="releaseYear">{movie.releaseYear}</span></p>
                    <p>Genre: <span id="genre">{movie.genre}</span></p>
                    <p>Director: <span id="director">{movie.director}</span></p>
                    <p>Rating: <span id="rating">{movie.rating}</span></p>
                    <p>Link: <span id="link">{movie.link}</span></p>
                </div>
            </div>

        </div>

    );
};

export default RandomMoviePicker;
