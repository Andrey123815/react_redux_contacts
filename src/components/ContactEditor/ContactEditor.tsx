import React from 'react';
import {Avatar} from "@mui/material";
import InputWithCaption from "../InputWithCaption/InputWithCaption";
import './ContactEditor.css';
import {stringAvatar} from "../../libraries/AvatarView";
import {CurrentContactContext, IContactContext} from "../../configurations/Contact";

const NAME_REGEXP: RegExp = /^[А-ЯA-Z][a-zа-я]{1,20}(\s[А-ЯA-Z][a-zа-я]{1,20})?$/;
const EMAIL_REGEXP: RegExp = /^((([0-9A-Za-z]+[-0-9A-z.]+[0-9A-Za-z]+)|([0-9А-Яа-я]+[-0-9А-я.]+[0-9А-Яа-я]+))@([-A-Za-z]+\.){1,2}[-A-Za-z]{2,})$/u;
const PHONE_REGEXP: RegExp = /^8[0-9]{12}$/;
const ADDRESS_REGEXP: RegExp = /^[А-Яа-яa-zA-Z]{2,}$/;

function ContactEditor() {
    const {contact,} = React.useContext<IContactContext>(CurrentContactContext);
    return (
        <>
            <div className="contact__editor">
                <div className="contact-editor__preview-block">
                    <Avatar style={{width: 70, height: 70}} {...stringAvatar(contact.name)} />
                    <InputWithCaption pattern={NAME_REGEXP}
                                      captionType="side" captionText="Имя"
                                      placeholder="Имя" contactKey="name" />
                </div>
                <div className="contact-editor__main-block">
                    <div className="main-block__props-line">
                        <InputWithCaption pattern={EMAIL_REGEXP}
                                          captionType="top" captionText="Email"
                                          placeholder="Почта" contactKey="email" />
                        <InputWithCaption pattern={PHONE_REGEXP}
                                          captionType="top" captionText="Телефон"
                                          placeholder="Телефон" contactKey="phone" />
                    </div>
                    <div className="main-block__props-line">
                        <InputWithCaption pattern={ADDRESS_REGEXP}
                                          captionType="top" captionText="Город"
                                          placeholder="Город" contactKey="city" />
                        <InputWithCaption pattern={ADDRESS_REGEXP}
                                          captionType="top" captionText="Улица"
                                          placeholder="Улица" contactKey="street" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactEditor;
