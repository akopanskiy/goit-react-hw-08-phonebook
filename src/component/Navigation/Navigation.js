import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Nav.Item>
        <Nav.Link
          eventKey="link-1"
          as={NavLink}
          to="/"
          className={styles.link}
          style={({ isActive }) => ({ color: isActive ? 'tomato' : 'black' })}
        >
          Home
        </Nav.Link>
      </Nav.Item>

      {isLoggedIn && (
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            as={NavLink}
            to="/contacts"
            className={styles.link}
            style={({ isActive }) => ({
              color: isActive ? 'tomato' : 'black',
            })}
          >
            Contacts
          </Nav.Link>
        </Nav.Item>
      )}
    </>
  );
};
export default Navigation;
