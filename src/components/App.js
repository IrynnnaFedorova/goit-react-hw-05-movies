import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { routes } from '../routes';
import Navbar from './Navbar';
import Container from './Container';
import '../styleMain/main.css';
import MyLoader from './MyLoader/MyLoader';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <Suspense fallback={<MyLoader />}>
          <Switch>
            <Route path={routes.HOME_PAGE} component={HomePage} exact />

            <Route path={routes.MOVIES_PAGE} component={MoviesPage} exact />

            <Route
              path={routes.MOVIES_PAGE_DETAILS}
              component={MovieDetailsPage}
            />

            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
