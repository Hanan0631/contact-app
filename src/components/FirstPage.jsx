//React
import { useState } from "react";

//uuid
import { v4 } from "uuid";

//Components
import ContactsList from "./ContactsList";
import Header from "./Header";
import Search from "./Search";
import AddContact from "./AddContact";

//Constants
import { regEmail, regName, regPhone } from "../constants/constants";

//Styles
import styles from "./FirstPage.module.css";

function FirstPage() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState([]);
  const [searchedContacts, setSearchedContacts] = useState(contacts);
  const [addContact, setAddContact] = useState(false);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    job: "",
  });

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    setSearchedContacts(newContacts);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
    if (search) {
      console.log(searchedContacts);
      const filteredContacts = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(search) ||
          contact.email.toLowerCase().includes(search)
      );
      setSearchedContacts(filteredContacts);
    } else {
      setSearchedContacts(contacts);
    }
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value, id: v4() }));
  };

  const addHandler = () => {
    if (!contact.name || !contact.email || !contact.phone) {
      setAlert("❌ اطلاعات خواسته شده را وارد کنید.");
      return;
    }
    if(!regName.test(contact.name)) {
      setAlert("❌ نام و نام خانوادگی نامعتبر است.")
    }
    if (!regEmail.test(contact.email)) {
      setAlert("❌ ایمیل نامعتبر است.");
      return;
    }
    if (!regPhone.test(contact.phone)) {
      setAlert("❌ تلفن همراه نامعتبر است.");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      email: "",
      phone: "",
      job: "",
    });
    setAddContact(false);
    1;
  };

  const showAddContact = () => {
    setAddContact(true);
  };

  return (
    <>
      {addContact ? (
        <AddContact
          alert={alert}
          setAddContact={setAddContact}
          contact={contact}
          addHandler={addHandler}
          changeHandler={changeHandler}
        />
      ) : (
        <div>
          <Header />
          <Search
            showAddContact={showAddContact}
            search={search}
            searchHandler={searchHandler}
          />
          {contacts.length ? (
            <ContactsList
              searchedContacts={searchedContacts}
              contacts={contacts}
              search={search}
              deleteHandler={deleteHandler}
            />
          ) : (
            <div className={styles.noContact}>
              <p>مخاطبی جهت نمایش وجود ندارد.</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default FirstPage;
