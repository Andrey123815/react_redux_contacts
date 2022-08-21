import React from 'react';
import ContactItem from "../ContactItem/ContactItem";

function ContactList() {
    return (
        <div className="contact-list">
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
        </div>
    );
}

export default ContactList;
