import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler=(id)=>{
    const newContactList= contacts.filter((contact)=>{
        return contact.id !== id;
    });
    setContacts(newContactList)
  }
  // const contacts = [
  //   {
  //     id: 1,
  //     name: "Gerson",
  //     email: "gerson@mail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "Antonella",
  //     email: "antonella@mail.com",
  //   },
  // ];

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} removeContact={removeContactHandler} />
    </div>
  );
}

export default App;
