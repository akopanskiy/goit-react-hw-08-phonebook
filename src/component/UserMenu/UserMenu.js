import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

import Button from 'react-bootstrap/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={styles.userMenu}>
      <span className={styles.greeting}>Дратути, {name}</span>
      <Button
        className={styles.buttonLogOut}
        variant="outline-success"
        type="button"
        onClick={() => dispatch(authOperations.logout())}
      >
        Log out
      </Button>
    </div>
  );
};
export default UserMenu;
