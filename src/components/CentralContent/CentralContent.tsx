import React from 'react';
import ContactEditor from "../ContactEditor/ContactEditor";
import Button from "@mui/material/Button";
import './CentralContent.css';
import {useCreateContactMutation, useUpdateContactMutation} from "../../services/ContactsAPI";
import {CurrentContactContext} from "../../configurations/Contact";

interface IUpdateUserInfo {
    isUpdatingMode: boolean,
    setIsUpdatingMode: (mode :boolean) => void
}

export interface Mode {
    updateInfo: IUpdateUserInfo
}

function CentralContent(props: Mode) {
    const {contact,dispatch} = React.useContext(CurrentContactContext);

    const [createContact,] = useCreateContactMutation();
    const [updateContact,] = useUpdateContactMutation();

    const handleClick = async({isUpdatingMode, setIsUpdatingMode}: IUpdateUserInfo) => {
        if (contact && !contact.name) {
            return;
        }

        if (isUpdatingMode) {
            await updateContact(contact);
            setIsUpdatingMode(false);
        } else {
            await createContact(contact);
        }
        dispatch({type: 'clean'});
    }

    return (
        <div className="central-content">
            <ContactEditor />
            <Button
                onClick={() => handleClick(props.updateInfo)}
                style={{marginTop: "60px", width: 400, marginLeft: "auto", marginRight: "auto", height: 50}}
                variant="contained"
            >
                {props.updateInfo.isUpdatingMode ? 'Сохранить изменения' : 'Создать контакт'}
            </Button>
        </div>
    );
}

export default CentralContent;
