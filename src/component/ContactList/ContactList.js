import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts, getFilter } from '../../redux/contacts/selectors';
import contactsOperations from '../../redux/contacts/operations';
import * as contactsAction from '../../redux/contacts/actions';
import styles from './ContactList.module.css';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ListGroup as="ol" numbered className={styles.contactsList}>
        <h2 className={styles.contactsHead}>Your Contacts</h2>
        <Col className={styles.filterForm}>
          <Form.Control
            className={styles.filterInput}
            placeholder="Find contacts by name"
            type="text"
            value={value}
            onChange={event =>
              dispatch(contactsAction.changeFilter(event.currentTarget.value))
            }
          />
        </Col>

        {contacts.map(({ name, id, number }) => (
          <ListGroup.Item key={id} as="li" className={styles.contactsInput}>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{name}</div>
              {number}
            </div>
            <Button
              variant="outline-danger"
              type="submit"
              className={styles.btnadd}
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ContactList;
