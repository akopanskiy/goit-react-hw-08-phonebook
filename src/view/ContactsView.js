import Section from '../component/Section';
import ContactForm from '../component/ContactForm';
import ContactList from '../component/ContactList';
import Filter from '../component/Filter';

const ContactsView = () => {
  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
export default ContactsView;
