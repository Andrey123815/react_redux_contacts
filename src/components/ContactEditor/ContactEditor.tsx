import React from 'react';
import {Avatar} from "@mui/material";
import InputWithCaption from "../InputWithCaption/InputWithCaption";
import './ContactEditor.css';
import {stringAvatar} from "../../libraries/AvatarView";
import {Action} from "../CentralContent/CentralContent";
import {IContact} from "../../configurations/Contact";

export interface Props {
    updateContact: (action: Action) => void,
    inputContactData: IContact
}

function ContactEditor(props: Props) {
    return (
        <>
            <div className="contact__editor">
                <div className="contact-editor__preview-block">
                    <Avatar style={{width: 70, height: 70}} {...stringAvatar('Kent Dodds')} />
                    <InputWithCaption updateContact={props.updateContact} inputContactData={props.inputContactData}
                                      captionType="side" captionText="Имя"
                                      placeholder="Имя" contactKey="name" />
                </div>
                <div className="contact-editor__main-block">
                    <div className="main-block__props-line">
                        <InputWithCaption updateContact={props.updateContact} inputContactData={props.inputContactData}
                                          captionType="top" captionText="Email"
                                          placeholder="Почта" contactKey="email" />
                        <InputWithCaption updateContact={props.updateContact} inputContactData={props.inputContactData}
                                          captionType="top" captionText="Телефон"
                                          placeholder="Телефон" contactKey="phone" />
                    </div>
                    <div className="main-block__props-line">
                        <InputWithCaption updateContact={props.updateContact} inputContactData={props.inputContactData}
                                          captionType="top" captionText="Город"
                                          placeholder="Город" contactKey="city" />
                        <InputWithCaption updateContact={props.updateContact} inputContactData={props.inputContactData}
                                          captionType="top" captionText="Улица"
                                          placeholder="Улица" contactKey="street" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactEditor;
