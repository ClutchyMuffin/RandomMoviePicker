# Random Movie Picker

A simple React application that picks a random movie from The Movie Database (TMDB) API and displays its details. This project demonstrates how to fetch data from an API, handle state, and use environment variables in a Vite-based React application.

## Features

- Fetch a random movie from TMDB's popular movies list.
- Display movie details including title, poster image, release year, genre, rating, and a link to the movie's TMDB page.
- Handle errors gracefully and update the UI accordingly.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool that provides fast development and build processes.
- **TMDB API**: Provides movie data for fetching popular movies.
- **Fetch API**: Used for making HTTP requests to the TMDB API.

## Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/random-movie-picker.git
    cd random-movie-picker
    ```

2. **Install Dependencies**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

    ```bash
    npm install
    ```

3. **Add Environment Variables**

    Create a `.env` file in the root of your project and add your TMDB API key:

    ```plaintext
    VITE_TMDB_API_KEY=your_actual_tmdb_api_key
    ```

4. **Run the Development Server**

    ```bash
    npm run dev
    ```

    This will start the development server and you can view the application at `http://localhost:5173`.

## Project Structure

- `src/`
  - `assets/`: Contains static assets like images.
  - `components/`: Contains React components (e.g., `RandomMoviePicker.jsx`).
  - `App.css`: Styles for the application.
  - `App.jsx`: Main React component that renders the application.
- `.env`: Environment variables configuration.
- `package.json`: Project metadata and dependencies.
- `vite.config.js`: Vite configuration file.

## Environment Variables

- `VITE_TMDB_API_KEY`: Your API key for The Movie Database API.

## Error Handling

If there are issues fetching movie data, the application will display "Error" in place of movie details and log the error to the console.

## Contributing

Feel free to open an issue or submit a pull request if you have suggestions or improvements!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

For more information about the TMDB API, visit the [TMDB API Documentation](https://developer.themoviedb.org/reference/intro/getting-started).
