import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'redux/contactsSlice';
import {
  useFetchContactsQuery,

} from 'redux/contactsApi';
import { ContactList } from './ContactList';

 const ContactsPage = () => {
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

  return <>{data && <ContactList contacts={data} />}</>;
};

export default ContactsPage