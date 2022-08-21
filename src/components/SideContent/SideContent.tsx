import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import ContactBlock from "../ContactBlock/ContactBlock";
import './SideContent.css';

function SideContent() {
    return (
        <div className="side-content">
            <SearchBar />
            <ContactBlock />
        </div>
    );
}

export default SideContent;
