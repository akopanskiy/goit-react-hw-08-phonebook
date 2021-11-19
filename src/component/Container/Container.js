import Navigation from '../Navigation';
import RegLogNavi from '../RegLogNavi';
import UserMenu from '../UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './Container.module.css';

const Container = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <div className={styles.container}>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <RegLogNavi />}
      </div>
    </>
  );
};
export default Container;
