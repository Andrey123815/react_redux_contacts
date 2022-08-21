import React from 'react';
import ContactEditor from "../ContactEditor/ContactEditor";
import Button from "@mui/material/Button";
import './CentralContent.css';

function CentralContent() {
    return (
        <div className="central-content">
            <ContactEditor />
            <Button style={{marginTop: "40px", width: 400, marginLeft: "auto", marginRight: "auto"}} variant="contained">Создать контакт</Button>
        </div>
    );
}

export default CentralContent;
