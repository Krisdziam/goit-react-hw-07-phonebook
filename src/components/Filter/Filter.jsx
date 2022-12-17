import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter, getContactFilter } from 'redux/contactsSlice';
import styles from './Filter.module.css';

const Filter = () => {
  // const dispatch = useDispatch();
  // const value = useSelector(state => state.contacts.filter);

  // const onChange = e => {
  //   dispatch(
  //     filterContacts(
  //       e.currentTarget.value.toLocaleLowerCase()
  //     )
  //   );
  // };
  const dispatch = useDispatch();
  const value = useSelector(getContactFilter);

  const onChange = (e) => {
    dispatch(filter(e.currentTarget.value.toLocaleLowerCase().trim()));
  };
  return (
    <div className={styles.filterContainer}>
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
    </div>
  );
};

export default Filter;
