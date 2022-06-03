import { useState, useEffect, Suspense, lazy } from 'react';
import {
  Route,
  useParams,
  Switch,
  NavLink,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import { routes } from '../../routes';
import { fetchCredits, fetchReviews } from '../../service/filmsAPI';
import MyLoader from '../MyLoader/MyLoader';
import c from './MovieNavigation.module.css';

const Cast = lazy(() => import('../Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "reviews" */),
);

const MovieNavigation = () => {
  const [actors, setActors] = useState(null);
  const [reviews, setReviews] = useState(null);
  const location = useLocation();

  const match = useRouteMatch();
  const { movieId } = useParams();

  useEffect(() => {
    fetchCredits(movieId).then(film => {
      setActors(film.cast);
    });

    fetchReviews(movieId).then(film => {
      setReviews(film.results);
    });
  }, [movieId]);

  return (
    <>
      <div className={c.boxAdditional}>
        <div className={c.boxTitle}>
          <h3>Additional information</h3>
        </div>
        <div className={c.boxLink}>
          <NavLink
            className={c.link}
            to={{
              pathname: `${match.url}${routes.CAST}`,
              state: { ...location.state },
            }}
            activeClassName={c.linkActive}
          >
            Cast
          </NavLink>
          <NavLink
            className={c.link}
            activeClassName={c.linkActive}
            to={{
              pathname: `${match.url}${routes.REVIEWS}`,
              state: { ...location.state },
            }}
            exact
          >
            Reviews
          </NavLink>
        </div>
      </div>

      <Suspense fallback={<MyLoader />}>
        <Switch>
          <Route path={`${match.path}${routes.CAST}`}>
            <Cast actors={actors} />
          </Route>
          <Route path={`${match.path}${routes.REVIEWS}`}>
            <Reviews reviews={reviews} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieNavigation;
