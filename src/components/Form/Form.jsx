import { useState } from 'react';
import styles from './Form.module.css';
import { nanoid } from 'nanoid';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddContactMutation } from 'redux/contactsApi';
import { useFetchContactsQuery } from 'redux/contactsApi';
import Filter from 'components/Filter/Filter';

export default function Form() {
  const [addContact] =
    useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const handleInputChange = e => {
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
    setId(nanoid());
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const isDuplicate = contacts.find(
      contact => contact.name === name
    );
    if (isDuplicate === undefined) {
      addContact({ name, number, id });
      toast.success(`Contact ${name} has been added`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    } else {
      toast.error(`${name} already exist`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setId('');
  };

  return (
    <>
      <h2 className={styles.subtitle}>Add new contact</h2>
      <form
        className={styles.form}
        onSubmit={handleSubmitForm}
      >
        <div className={styles.formContainer}>
          <div className={styles.inputPadding}>
            <label className={styles.label}>Name:</label>
            <input
              className={styles.input}
              placeholder="Enter name"
              onChange={handleInputChange}
              type="text"
              name="name"
              value={name}
              pattern="^[A-Za-zА-Яа-яЁёІіЇїЄє]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
          </div>
          <div className={styles.phoneContainer}>
            <label className={styles.label}>Number:</label>
            <PhoneInput
              className={styles.inputPhone}
              defaultCountry="UA"
              onChange={number => {
                setNumber(number);
              }}
              region="Europe"
              title="Number"
              type="tel"
              name="number"
              value={number}
              placeholder="Enter phone number"
              autoComplete="off"
              international
              maxLength="16"
            />
          </div>
        </div>
        <button type="submit" className={styles.addBtn}>
          Add <br /> Contact
        </button>
      </form>

      {contacts !== undefined &&
        contacts.length > 0  && <Filter />}
    </>
  );
}
