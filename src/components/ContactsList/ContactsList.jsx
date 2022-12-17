import React from 'react';
import styles from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'redux/contactsSlice';
import { useFetchContactsQuery } from 'redux/contactsSliceNew';
import { ContactPage } from './ContactPage';

const ContactsList = () => {
  const { data, isFetching } = useFetchContactsQuery();

  // const dispatch = useDispatch();
  // const contacts = useSelector(
  //   state => state.contacts.contacts
  // );
  // const filterContact = useSelector(
  //   state => state.contacts.filter
  // );

  // const onDeleteContact = id => {
  //   dispatch(removeContacts(id));
  // };

  // const filterContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterContact)
  //   );
  // };

  // const filteredContacts =
  //   filterContact === '' ? contacts : filterContacts();

  return (
    <div className={styles.containerList}>
      {data && (
        <ul className={styles.list}>
          {data.map(({name, number, id}) => (
            <li className={styles.item} key={id}>
               <div className={styles.textContainer}>
                <p className={styles.name}>{name}:</p>
                <p className={styles.number}>{number}</p>
                <button
                  className={styles.removeBtn}
                  onClick={() => null}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {/* <div className={styles.containerList}>
        <ul className={styles.list}>
        {}
          {filteredContacts.map(({ id, number, name }) => (
            <li className={styles.item} key={id}>
              <div className={styles.textContainer}>
                <p className={styles.text}>{name}:</p>
                <p className={styles.number}>{number}</p>
                <button
                  className={styles.removeBtn}
                  onClick={() => onDeleteContact(id)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default ContactsList;
