import Loader from 'components/Loader/Loader';
import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { getContactFilter } from 'redux/contactsSlice';
import { ContactList } from './ContactList';

const ContactsPage = () => {
  const { data, isLoading } = useFetchContactsQuery();
  const filterContact = useSelector(getContactFilter);

  const filterContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filterContact)
    );
  };

  const filteredContacts =
    filterContact === '' ? data : filterContacts();

  return (
    <>
      {isLoading && <Loader />}
      {filteredContacts && (
        <ContactList contacts={filteredContacts} />
      )}
    </>
  );
};

export default ContactsPage;
