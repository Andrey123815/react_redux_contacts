import React from 'react';
import ContactEditor from "../ContactEditor/ContactEditor";
import Button from "@mui/material/Button";
import './CentralContent.css';
import {useCreateContactMutation} from "../../services/ContactsAPI";
import {defaultContact, IContact} from "../../configurations/Contact";
import {MainUserInfoContext} from "../../configurations/User";

export type ContactIdentType = 'email' | 'name' | 'phone' | 'city' | 'street';
export type ActionType = ContactIdentType | 'clean';
export interface Action {
    type: ActionType,
    payload: string
}

function reducer(state: IContact, action: Action): IContact {
    const {type, payload} = action;
    if (type === 'clean') {
        return defaultContact;
    }

    return {
        ...state,
        [type]: payload
    };
}

function CentralContent() {
    const userContext = React.useContext(MainUserInfoContext);

    let userContact: IContact = defaultContact;
    userContact.contactOwnerID = userContext.userInfo.user.id;

    const [contact, dispatch] = React.useReducer(reducer, userContact);
    const [createContact,] = useCreateContactMutation();

    const handleClick = async () => {
        await createContact(contact);
        dispatch({type: 'clean', payload: ''});
    }

    return (
        <div className="central-content">
            <ContactEditor updateContact={dispatch} inputContactData={contact} />
            <Button
                onClick={handleClick}
                style={{marginTop: "60px", width: 400, marginLeft: "auto", marginRight: "auto", height: 50}}
                variant="contained"
            >
                Создать контакт
            </Button>
        </div>
    );
}

export default CentralContent;
