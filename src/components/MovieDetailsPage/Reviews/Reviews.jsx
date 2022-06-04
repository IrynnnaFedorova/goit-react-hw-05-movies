import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/movies-api';
import s from './Reviews.module.css';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId)
            .then(data => {
                setReviews(data.results);
            })
    }, [movieId])

    return <>
        {reviews.length > 0
            ? (<ul className={s.reviews}>
                { reviews.map(({ id, author, content }) => (
                    <li className={s.reviews__item} key={id}>
                        <h3>{author}</h3>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>)
            : <p>We don't have any reviews for this movie</p>
        }
    </>
}

// Reviews.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ),
// };