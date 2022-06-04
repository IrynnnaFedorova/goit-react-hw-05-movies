import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/movies-api';
import s from './Cast.module.css';

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCredits(movieId)
            .then(data => {
                setCast(data.cast);
            })
    }, [movieId])

    return <>
        {cast &&
            <ul className={s.cast}>
                { cast.map(({ id, character, original_name, profile_path }) => (
                    <li className={s.cast__item} key={id}>
                        {profile_path
                            ? <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={original_name} className={s.image} />
                            : <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt={original_name} className={s.image} />
                        }
                        <p>{ original_name }</p>
                        <p>{ character }</p>
                    </li>
                ))}
            </ul>
        }
    </>
}

// Cast.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ),
// };