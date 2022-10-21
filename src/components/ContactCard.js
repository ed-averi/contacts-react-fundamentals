import React from "react";
import user3 from "../images/user3.png";

const ContactCard = ({ contact, removeContact }) => {
  const { id, name, email } = contact;

  return (
    <div className="item">
      <img src={user3} alt="user icon" className="ui avatar image" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        onClick={() => {
          removeContact(id);
        }}
      ></i>
    </div>
  );
};

export default ContactCard;
