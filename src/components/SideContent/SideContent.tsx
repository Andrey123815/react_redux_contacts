import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import ContactBlock from "../ContactBlock/ContactBlock";
import './SideContent.css';

export interface ContactClick {
    contactClick: (id: number) => void
}

function SideContent(props: ContactClick) {
    return (
        <div className="side-content">
            <SearchBar />
            <ContactBlock contactClick={props.contactClick}/>
        </div>
    );
}

export default SideContent;
