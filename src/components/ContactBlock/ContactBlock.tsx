import React, {useContext} from 'react';
import ContactMenu from "../ContactMenu/ContactMenu";
import ContactList from "../ContactList/ContactList";
import {ContactClick, IContactsWithSearchName} from "../SideContent/SideContent";
import {useGetContactsQuery} from "../../services/ContactsAPI";
import {MainUserInfoContext} from "../../configurations/User";
import {IContact} from "../../configurations/Contact";

export interface ContactProps extends ContactClick {
    searchedContacts: IContactsWithSearchName
}

function ContactBlock(props: ContactProps) {
    const {user} = useContext(MainUserInfoContext).userInfo;
    const {data: contacts} = useGetContactsQuery(user.id);
    return (
        <div className="contact-block">
            <ContactMenu />
            <ContactList allUserContacts={contacts as IContact[]} searchedContacts={props.searchedContacts} contactClick={props.contactClick}/>
        </div>
    );
}

export default ContactBlock;
