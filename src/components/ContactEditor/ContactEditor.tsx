import React from 'react';
import {Avatar} from "@mui/material";
import InputWithCaption from "../InputWithCaption/InputWithCaption";
import './ContactEditor.css';
import {stringAvatar} from "../../libraries/AvatarView";
// import {Action} from "../CentralContent/CentralContent";
import {CurrentContactContext, IContact, IContactContext} from "../../configurations/Contact";

// export interface Props {
//     updateContact: (action: Action) => void,
//     inputContactData: IContact
// }

function ContactEditor() {
    const {contact,} = React.useContext<IContactContext>(CurrentContactContext);
    return (
        <>
            <div className="contact__editor">
                <div className="contact-editor__preview-block">
                    <Avatar style={{width: 70, height: 70}} {...stringAvatar(contact.name)} />
                    <InputWithCaption
                                      captionType="side" captionText="Имя"
                                      placeholder="Имя" contactKey="name" />
                </div>
                <div className="contact-editor__main-block">
                    <div className="main-block__props-line">
                        <InputWithCaption
                                          captionType="top" captionText="Email"
                                          placeholder="Почта" contactKey="email" />
                        <InputWithCaption captionType="top" captionText="Телефон"
                                          placeholder="Телефон" contactKey="phone" />
                    </div>
                    <div className="main-block__props-line">
                        <InputWithCaption
                                          captionType="top" captionText="Город"
                                          placeholder="Город" contactKey="city" />
                        <InputWithCaption
                                          captionType="top" captionText="Улица"
                                          placeholder="Улица" contactKey="street" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactEditor;
