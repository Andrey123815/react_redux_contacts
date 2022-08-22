import React from 'react';
import ContactItem from "../ContactItem/ContactItem";
import './ContactList.css';
import {useDeleteContactMutation,} from "../../services/ContactsAPI";
import {IContact} from "../../configurations/Contact";
import {ContactProps} from "../ContactBlock/ContactBlock";

interface Props extends ContactProps {
    allUserContacts: IContact[]
}

function ContactList(props: Props) {
    const [deleteContact,] = useDeleteContactMutation();

    const handleDeleteContact = async (e: React.MouseEvent<HTMLElement>, contactID: number) => {
        e.stopPropagation();
        await deleteContact(contactID);
    }

    const handleClickContact = (e: React.MouseEvent<HTMLElement>, contactID: number) => {
        e.stopPropagation();
        props.contactClick(contactID);
    }

    const {searchedContacts, allUserContacts} = props;

    const content: IContact[] = (searchedContacts.contacts.length && searchedContacts.contacts) || allUserContacts;

    if (searchedContacts.searchName && !searchedContacts.contacts.length) {
        return (
            <div className="contact-list">
                <div className="contact-list_empty">
                    По вашему запросу ничего не найдено.
                    Напоминаем, что поиск производится по имени.<br/>
                    Перепроверьте, пожалуйста, указанные данные
                </div>
            </div>
        );
    }

    return (
        <div className="contact-list">
            {!searchedContacts.searchName && !searchedContacts.contacts.length && !props.allUserContacts &&
                <div className="contact-list_empty">
                    Вы пока не имеете контактов.
                    Попробуйте создать один, заполнив обязательное поле имени в форме создания контакта
                    и нажав на кнопку 'создать контакт'
                </div>
            }
            {content && (content as IContact[]).map((contact) => {
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
