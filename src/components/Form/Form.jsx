import { useState } from 'react';
import styles from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddContactMutation } from 'redux/contactsSliceNew';
import { useFetchContactsQuery } from 'redux/contactsSliceNew';

export default function Form() {
  const [addContact, {isLoading}] = useAddContactMutation();
  const { data:contacts, isFetching } = useFetchContactsQuery();

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
    isDuplicate === undefined
      ? addContact({ name, number, id }) 
      : toast.error(`${name} already exist`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
     
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
          <div>
            <label className={styles.label}>Name:</label>
            <input
              className={styles.input}
              placeholder="Enter name"
              onChange={handleInputChange}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. 
              For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div>
            <label className={styles.label}>Number:</label>
            <input
              className={styles.input}
              placeholder="Enter number"
              onChange={handleInputChange}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, 
              parentheses and can start with +"
              required
            />
          </div>
        </div>
        <button type="submit" className={styles.addBtn}>
          Add <br /> Contact
        </button>
      </form>
    </>
  );
}
