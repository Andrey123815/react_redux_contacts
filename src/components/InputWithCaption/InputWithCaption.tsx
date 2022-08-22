import React from 'react';
import TextField from '@mui/material/TextField';
import './InputWithCaption.css';
import {IContact} from "../../configurations/Contact";
import {Action, ContactIdentType} from "../CentralContent/CentralContent";

type Caption = 'top' | 'side';

interface Props {
    captionType: Caption,
    captionText: string,
    placeholder: string,
    updateContact: (action: Action) => void,
    inputContactData: IContact,
    contactKey: ContactIdentType
}

function InputWithCaption(props: Props) {
    const captionStyle: string = `input-with-caption_${props.captionType}`;
    const captionTextStyle: string = `input-with-caption__text_${props.captionType}`;

    return (
        <div className={captionStyle}>
            <span className={captionTextStyle}>{props.captionText}</span>
            <TextField
                onChange={(e) => props.updateContact({type: props.contactKey, payload: e.target.value})}
                sx={{marginTop: "auto", marginBottom: "auto"}}
                id="outlined-basic" label={props.placeholder}
                variant="outlined" value={props.inputContactData[props.contactKey]} />
        </div>
    );
}

export default InputWithCaption;
