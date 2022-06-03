import { useState, useEffect } from 'react';
import FilmsList from '../../components/FilmsList';
import { fetchTrendingFilms } from '../../service/filmsAPI.js';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTrendingFilms().then(({ results }) => setFilms(results));
  }, []);

  return <main>{films.length > 0 && <FilmsList films={films} />}</main>;
};

export default HomePage;
