import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import c from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={c.header}>
      <nav className={c.nav}>
        <ul className={c.navList}>
          <li className={c.navListItem}>
            <NavLink
              exact
              className={c.link}
              activeClassName={c.activeLink}
              to={routes.HOME_PAGE}
            >
              Home
            </NavLink>
          </li>
          <li className={c.navListItem}>
            <NavLink
              className={c.link}
              to={routes.MOVIES_PAGE}
              activeClassName={c.activeLink}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
