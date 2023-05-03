import {React, useState, useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MoviesCard from './MoviesCard';

const API_URL = 'http://www.omdbapi.com/?apikey=e16fbf87';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const SearchMovies = async(Title) => {

        let response = await fetch(`${API_URL}&s=${Title}`);
        let data = await response.json();

        setMovies(data.Search);

    }

    useEffect( ()=> {
        SearchMovies('spiderman');
    }, [])

    return (
      <div className="app">
        <h1>MoviesLand</h1>

        <div className="search">
          <input
            placeholder="search movie name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={SearchIcon} alt="Search" onClick={() => SearchMovies(searchTerm)} />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map(  (movie) => (
                <MoviesCard movie = {movie } />
            ))}
          </div>

        ) : (
          <div className="empty">

            <h2>No movies found</h2>
          
          </div>
        )}
      </div>
    );
}
export default App;
