import { NavLink } from 'react-router-dom';
import styles from './RegLogNavi.module.css';

const RegLogNavi = () => {
  return (
    <>
      <nav className={styles.siteNav}>
        <ul className={styles.siteNavList}>
          <li className={styles.item}>
            <NavLink
              to="/register"
              className={styles.link}
              style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
            >
              Registration
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/login"
              className={styles.link}
              style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default RegLogNavi;
