import React from 'react';
import {Avatar} from "@mui/material";
import InputWithCaption from "../InputWithCaption/InputWithCaption";
import './ContactEditor.css';

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function ContactEditor() {
    return (
        <>
            <div className="contact__editor">
                <div className="contact-editor__preview-block">
                    <Avatar style={{width: 70, height: 70}} {...stringAvatar('Kent Dodds')} />
                    <InputWithCaption type="side" captionText="Имя" placeholder="Ваше имя" />
                </div>
                <div className="contact-editor__main-block">
                    <div className="main-block__props-line">
                        <InputWithCaption type="top" captionText="Email" placeholder="Ваша почта" />
                        <InputWithCaption type="top" captionText="Телефон" placeholder="Ваш телефон" />
                    </div>
                    <div className="main-block__props-line">
                        <InputWithCaption type="top" captionText="Город" placeholder="Ваш город" />
                        <InputWithCaption type="top" captionText="Улица" placeholder="Ваша улица" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactEditor;
