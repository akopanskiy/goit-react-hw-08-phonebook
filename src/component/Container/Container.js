import Navigation from '../Navigation';
import RegLogNavi from '../RegLogNavi';
import UserMenu from '../UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './Container.module.css';

import { Nav } from 'react-bootstrap';

const Container = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/" className={styles.container}>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <RegLogNavi />}
      </Nav>
    </>
  );
};
export default Container;
