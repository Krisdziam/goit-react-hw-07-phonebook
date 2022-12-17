import { useDeleteContactMutation } from 'redux/contactsApi';
import styles from './ContactsList.module.css';

export const  ContactList=({contacts})=> {
  const [deleteContact, {isLoading}] = useDeleteContactMutation()
  return (
    <div className={styles.containerList}>
 
      <ul className={styles.list}>
        {contacts.map(({name, number, id}) => (
          <li className={styles.item} key={id}>
             <div className={styles.textContainer}>
              <p className={styles.name}>{name}:</p>
              <p className={styles.number}>{number}</p>
              <button
                className={styles.removeBtn} 
                disabled =  {isLoading}
                onClick={() => deleteContact(id)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
 
   
  </div>
  )
}
