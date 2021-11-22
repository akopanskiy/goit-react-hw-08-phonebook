import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import styles from './ViewsStyles.module.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      /* falls through */
      case 'email':
        return setEmail(value);
      /* falls through */
      case 'password':
        // eslint-disable-next-line no-sequences
        return setPassword(value);
      /* falls through */
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className={styles.homePage}>
      <Form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={styles.formReg}
      >
        <h1 className={styles.nameReg}>Sign in</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className={styles.labelReg}>Name</Form.Label>
          <Form.Control
            className={styles.inputReg}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={styles.labelReg}>Email address</Form.Label>
          <Form.Control
            className={styles.inputReg}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          <Form.Text className={styles.textMuted}>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={styles.labelReg}>Password</Form.Label>
          <Form.Control
            className={styles.inputReg}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <Button
          type="submit"
          variant="success"
          className={styles.btnReg}
          disabled={password === '' ? true : false}
        >
          Registration
        </Button>
      </Form>
    </div>
  );
};
export default RegisterView;
