import { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/operations';

import shortid from 'shortid';
import styles from './Form.module.css';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const nameId = shortid.generate();
  const numberId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(contactsOperations.addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className={styles.formAdd}>
        <Row>
          <Col htmlFor={numberId}>
            <Form.Control
              className={styles.col}
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={handleChange}
              id={nameId}
              autoComplete="off"
            />
          </Col>
          <Col htmlFor={numberId}>
            <Form.Control
              className={styles.col}
              placeholder="Number"
              type="tel"
              name="number"
              value={number}
              pattern="+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={handleChange}
              id={numberId}
              autoComplete="off"
            />
          </Col>
        </Row>
        <Button variant="success" type="submit" className={styles.btnadd}>
          Add
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
