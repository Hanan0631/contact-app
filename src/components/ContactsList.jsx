//Styles
import styles from "./ContactsList.module.css";

function ContactsList({ contacts, searchedContacts, search, deleteHandler }) {
  return (
    <ul className={styles.container}>
      {search
        ? searchedContacts.map((contact) => (
            <li key={contact.id} className={styles.contactContainer}>
              <p className={styles.name}>{contact.name}</p>
              <p className={styles.phone}>{contact.phone}</p>
              <p className={styles.phone}>{contact.email}</p>
              <p className={styles.options}>
                <button onClick={() => deleteHandler(contact.id)}>حذف</button>
              </p>
            </li>
          ))
        : contacts.map((contact) => (
            <li key={contact.id} className={styles.contactContainer}>
              <p className={styles.name}>{contact.name}</p>
              <p className={styles.phone}>{contact.phone}</p>
              <p className={styles.phone}>{contact.email}</p>
              <p className={styles.options}>
                <button onClick={() => deleteHandler(contact.id)}>حذف</button>
              </p>
            </li>
          ))}
    </ul>
  );
}

export default ContactsList;
