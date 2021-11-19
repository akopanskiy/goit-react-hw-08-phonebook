import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={styles.userMenu}>
      <span className={styles.greeting}>Дратути, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logout())}>
        <span>Log out</span>
      </button>
    </div>
  );
};
export default UserMenu;
