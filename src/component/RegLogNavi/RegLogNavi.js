import { NavLink } from 'react-router-dom';
import styles from './RegLogNavi.module.css';

import Nav from 'react-bootstrap/Nav';

const RegLogNavi = () => {
  return (
    <>
      <nav className={styles.siteNav}>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            <NavLink
              to="/register"
              className={styles.link}
              style={({ isActive }) => ({
                color: isActive ? 'tomato' : 'black',
              })}
            >
              Registration
            </NavLink>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-4">
            <NavLink
              to="/login"
              className={styles.link}
              style={({ isActive }) => ({
                color: isActive ? 'tomato' : 'black',
              })}
            >
              Login
            </NavLink>
          </Nav.Link>
        </Nav.Item>
      </nav>
    </>
  );
};
export default RegLogNavi;
