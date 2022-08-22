import React, {useContext} from 'react';
import ContactItem from "../ContactItem/ContactItem";
import './ContactList.css';
import {useDeleteContactMutation, useGetContactsQuery} from "../../services/ContactsAPI";
import {MainUserInfoContext} from "../../configurations/User";
import {IContact} from "../../configurations/Contact";
import {ContactClick} from "../SideContent/SideContent";

function ContactList(props: ContactClick) {
    const userContext = useContext(MainUserInfoContext);
    const {data: contacts} = useGetContactsQuery(userContext.userInfo.user.id);
    const [deleteContact,] = useDeleteContactMutation();

    const handleDeleteContact = async (e: React.MouseEvent<HTMLElement>, contactID: number) => {
        e.stopPropagation();
        await deleteContact(contactID);
    }

    const handleClickContact = (e: React.MouseEvent<HTMLElement>, contactID: number) => {
        e.stopPropagation();
        props.contactClick(contactID);
    }

    return (
        <div className="contact-list">
            {!contacts &&
                <div className="contact-list_empty">
                    Вы пока не имеете контактов.
                    Попробуйте создать один, заполнив обязательное поле имени в форме создания контакта
                    и нажав на кнопку 'создать контакт'
                </div>
            }
            {contacts && (contacts as IContact[]).map((contact) => {
                return (
                    <ContactItem key={contact.id} contact={contact}
                                        onDelete={(e: React.MouseEvent<HTMLElement>) => handleDeleteContact(e, contact.id)}
                                        onOpen={(e: React.MouseEvent<HTMLElement>) => handleClickContact(e, contact.id)}
                    />
                );
            })}
        </div>
    );
}

export default ContactList;
