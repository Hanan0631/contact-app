//Constants
import { inputs } from "../constants/constants";

//SVG
import contactsButton from "../assets/contacts.svg";

//Styles
import styles from "./AddContact.module.css";

function AddContact({
  alert,
  contact,
  addHandler,
  changeHandler,
  setAddContact,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.contactsButton}>
        <img
          src={contactsButton}
          alt="Contacts Button"
          onClick={() => setAddContact(false)}
        />
      </div>
      <h3>افزودن مخاطب جدید</h3>
      {inputs.map((input, index) => (
        <li key={index}>
          <input
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        </li>
      ))}
      <button onClick={addHandler}>افزودن</button>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
    </div>
  );
}

export default AddContact;
