import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MoviesListItem.module.css';

export default function MoviesListItem({ data }) {
  const location = useLocation();
  
    return (
      data.map(({ title, id, poster_path, genres, release_date }) => (
          <li className={s.item} key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }} className={s.link}>
            <div className={s.image_wrapper}>
              {poster_path
                    ? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={s.image}/>
                    : <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt={title} className={s.image} />
                }
            </div>
            <div className={s.description}>
              <h3 className={s.movie}>{title}</h3>
              {/* <p className={s.rating}>{ vote_average*10+'%'}</p> */}
              <ul className={s.genres}>
                    {genres.map(({ id, name }, index) => (
                        <li className={s.genres__item} key={id}>
                            { (index ? ', ' : '') + name }
                        </li>
                    ))}
                <p className={s.date}>&#160;| {parseInt(release_date)}</p>
                </ul>  
            </div>
              
            
            </Link>
          </li>
      ))
    )
}

MoviesListItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};