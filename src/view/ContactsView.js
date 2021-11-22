import ContactForm from '../component/ContactForm';
import ContactList from '../component/ContactList';
import styles from './ViewsStyles.module.css';

const ContactsView = () => {
  return (
    <div className={styles.contactsPage}>
      <ContactForm />
      <ContactList />
    </div>
  );
};
export default ContactsView;
