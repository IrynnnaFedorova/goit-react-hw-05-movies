import { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/movies-api';
import { genresNames } from 'services/genres-names';
import { Link } from 'react-router-dom';
import Container from 'components/Container';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    const [from, setFrom] = useState(null);

    const navigate = useNavigate();
    const { state } = useLocation();
    
    useEffect(() => {
        if (state?.from) {
            const { pathname } = state.from;
            setFrom(pathname);
        }
    },[state?.from])

    useEffect(() => {
        fetchMovieDetails(movieId)
            .then(data => {
                normalizedData(data);
                setMovie(data);
                console.log(data)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId])

    // Normalizing genres in data
    function normalizedData(results) {
        createGenres(genresNames, results.genres);
        
        return results;
    }

    function createGenres(arrayID, genresID) {
        let arrayOfGenres = [];

        return arrayID.map(element => {
            if (genresID.includes(element.id)) {
                arrayOfGenres.push(element.name);
            }

            return arrayOfGenres;
        });
    }

    function goBackHandle() {
        if (from === null) {
            //Go back functionality for first load of page from address bar
            navigate('/', { replace: true });
            return;
        }

        else {
            navigate(from);
        }
    }

    return <Container>
        <button onClick={ goBackHandle }>Go back</button>
        {movie &&
            <div className={s.details}>
                {movie.poster_path
                    ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} className={s.image}/>
                    : <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt={movie.original_title} className={s.image} />
                }
                <div>
                    <h1>{movie.original_title}</h1>
                    <p>{movie.tagline}</p>
                    <p>User Score: {movie.vote_average * 10}%</p>
                    <h2>Release</h2>
                    <p>{parseInt(movie.release_date)}</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h2>Genres</h2>
                    <ul className={s.genres}>
                        {movie.genres.map(({ id, name }) => (
                            <li className={s.genres__item} key={id}>
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>}
        <div>
            <p>Additional information</p>
            <Link to={`/movies/${movieId}/cast`} className={s.link}>Cast</Link>
            <Link to={`/movies/${movieId}/reviews`} className={s.link}>Reviews</Link>
        </div>
        <Outlet/>
    </Container>
}