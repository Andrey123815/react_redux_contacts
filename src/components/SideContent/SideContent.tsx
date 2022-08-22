import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import ContactBlock from "../ContactBlock/ContactBlock";
import './SideContent.css';
import {IContact} from "../../configurations/Contact";

export interface ContactClick {
    contactClick: (id: number) => void,
}

export interface IContactsWithSearchName {
    contacts: IContact[],
    searchName: string
}

function SideContent(props: ContactClick) {
    const [searchContacts, setSearchContacts] = React.useState<IContactsWithSearchName>({contacts: [], searchName: ''});

    return (
        <div className="side-content">
            <SearchBar setterSearchContacts={setSearchContacts} />
            <ContactBlock searchedContacts={searchContacts} contactClick={props.contactClick}/>
        </div>
    );
}

export default SideContent;
