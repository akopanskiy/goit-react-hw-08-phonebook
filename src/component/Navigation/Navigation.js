import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <nav className={styles.siteNav}>
        <ul className={styles.siteNavList}>
          <li className={styles.item}>
            <NavLink
              to="/"
              className={styles.link}
              style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
            >
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className={styles.item}>
              <NavLink
                to="/contacts"
                className={styles.link}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                })}
              >
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
