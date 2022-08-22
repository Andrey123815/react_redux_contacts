import React from 'react';
import ContactMenu from "../ContactMenu/ContactMenu";
import ContactList from "../ContactList/ContactList";
import {ContactClick} from "../SideContent/SideContent";

function ContactBlock(props: ContactClick) {
    return (
        <div className="contact-block">
            <ContactMenu />
            <ContactList contactClick={props.contactClick}/>
        </div>
    );
}

export default ContactBlock;
