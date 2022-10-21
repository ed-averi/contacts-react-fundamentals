import React, { useState } from "react";

const AddContact = (props) => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
  });

  const add = (e) => {
    e.preventDefault();
    if (newContact.name === "" || newContact.email === "") {
      alert("Please fill all the fields");
      return;
    }

    props.addContactHandler(newContact);
    setNewContact({
      name: "",
      email: "",
    });
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newContact.name}
            onChange={(e) => {
              setNewContact({
                ...newContact,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newContact.email}
            onChange={(e) => {
              setNewContact({
                ...newContact,
                email: e.target.value,
              });
            }}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
