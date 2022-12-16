import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);

  const onChange = e => {
    dispatch(
      filterContacts(
        e.currentTarget.value.toLocaleLowerCase()
      )
    );
  };

  return (
    <>
      <label className={styles.label}>
        Find contacts by name: <br />
        <input
          className={styles.input}
          placeholder="Enter name"
          onChange={onChange}
          name="filter"
          type="text"
          value={value}
          autoComplete="off"
          required
        />
      </label>
    </>
  );
};

export default Filter;
