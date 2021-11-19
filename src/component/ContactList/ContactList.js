import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import contactsOperations from '../../redux/contacts/operations';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {contacts.map(({ name, id, number }) => (
        <li className={styles.contactList} key={id}>
          <span className={styles.contactsNameNumber}>
            {name}: {number}
          </span>
          <button
            className={styles.buttonDelete}
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
