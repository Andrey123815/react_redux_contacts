import React from 'react';
import ContactMenu from "../ContactMenu/ContactMenu";
import ContactList from "../ContactList/ContactList";

function ContactBlock() {
    return (
        <div className="contact-block">
            <ContactMenu />
            <ContactList />
        </div>
    );
}

export default ContactBlock;
