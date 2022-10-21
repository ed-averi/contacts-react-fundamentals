import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} removeContact={props.removeContact} />;
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
