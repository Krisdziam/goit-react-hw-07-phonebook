import { useDeleteContactMutation } from 'redux/contactsApi';
import styles from './ContactsList.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactList = ({ contacts }) => {
  const [deleteContact, { isLoading }] =
    useDeleteContactMutation();
  const removeContact = (id, name) => {
    deleteContact(id, name);
    toast.success(`Contact ${name} has been deleted`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };
  return (
    <div className={styles.containerList}>
      <ul className={styles.list}>
        {contacts.map(({ name, number, id }) => (
          <li className={styles.item} key={id}>
            <div className={styles.textContainer}>
              <p className={styles.name}>{name}:</p>
              <p className={styles.number}>{number}</p>
              <button
                className={styles.removeBtn}
                disabled={isLoading}
                onClick={() => removeContact(id, name)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};