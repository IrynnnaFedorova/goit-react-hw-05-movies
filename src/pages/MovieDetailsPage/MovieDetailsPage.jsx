import { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { fetchFilmById } from '../../service/filmsAPI';
import FilmCard from '../../components/FilmCard';
import MovieNavigation from '../../components/MovieNavigation';
import Button from '../../components/Button';
import { routes } from '../../routes';

const MovieDetailsPage = () => {
  const [
    {
      poster_path,
      genres,
      overview,
      tagline,
      vote_average,
      title,
      release_date,
    },
    setFilm,
  ] = useState({});

  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchFilmById(movieId).then(
      ({
        poster_path,
        genres,
        overview,
        tagline,
        vote_average,
        title,
        release_date,
      }) => {
        const myFilm = {
          poster_path,
          genres,
          overview,
          tagline,
          vote_average,
          title,
          release_date,
        };

        setFilm(myFilm);
      },
    );
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location?.state?.from ?? routes.HOME_PAGE);
  };

  return (
    <div>
      <Button type="button" title="Go back" onClick={handleGoBack} />

      {title && (
        <FilmCard
          poster_path={poster_path}
          title={title}
          overview={overview}
          genres={genres}
          tagline={tagline}
          vote_average={vote_average}
          release_date={release_date}
        />
      )}

      <MovieNavigation />
    </div>
  );
};

export default MovieDetailsPage;
