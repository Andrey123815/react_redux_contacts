import React from 'react';
import ContactEditor from "../ContactEditor/ContactEditor";
import Button from "@mui/material/Button";
import './CentralContent.css';
import {useCreateContactMutation} from "../../services/ContactsAPI";
import {CurrentContactContext} from "../../configurations/Contact";

export interface Mode {
    updateMode: boolean
}

function CentralContent(props: Mode) {
    const {contact,dispatch} = React.useContext(CurrentContactContext);

    const [createContact,] = useCreateContactMutation();

    const handleClick = async () => {
        await createContact(contact);
        dispatch({type: 'clean', payload: ''});
    }

    return (
        <div className="central-content">
            <ContactEditor />
            <Button
                onClick={handleClick}
                style={{marginTop: "60px", width: 400, marginLeft: "auto", marginRight: "auto", height: 50}}
                variant="contained"
            >
                {props.updateMode ? 'Сохранить изменения' : 'Создать контакт'}
            </Button>
        </div>
    );
}

export default CentralContent;
