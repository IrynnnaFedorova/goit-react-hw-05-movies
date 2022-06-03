import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { ToastContainer, toast } from 'react-toastify';
import FilmsList from '../../components/FilmsList/FilmsList';
import SearchForm from '../../components/SearchForm';
import { fetchSearchMovies } from '../../service/filmsAPI';

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { search } = location;
  const { query } = queryString.parse(search);

  const [value, setValue] = useState(query || '');
  const [films, setFilms] = useState(null);

  useEffect(() => {
    if (value) {
      fetchSearchMovies(value).then(({ results }) => {
        if (results) {
          return toast.error(`No results were found for ${value}`);
        }
        setFilms(results);
      });
    }
  }, [value]);

  const onSubmit = data => {
    setValue(data);
    history.push({
      ...location,
      search: `query=${data}`,
    });
  };
  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {films && <FilmsList films={films} location={location} />}
      <ToastContainer />
    </>
  );
};

export default MoviesPage;
