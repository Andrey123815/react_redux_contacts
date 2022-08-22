import React from 'react';
import TextField from '@mui/material/TextField';
import './InputWithCaption.css';
import {CurrentContactContext, IContactContext} from "../../configurations/Contact";
import {ContactIdentType} from "../Content/Content";

type Caption = 'top' | 'side';

interface Props {
    captionType: Caption,
    captionText: string,
    placeholder: string,
    contactKey: ContactIdentType;
}

function InputWithCaption(props: Props) {
    const captionStyle: string = `input-with-caption_${props.captionType}`;
    const captionTextStyle: string = `input-with-caption__text_${props.captionType}`;

    const {contact, dispatch} = React.useContext<IContactContext>(CurrentContactContext);

    return (
        <div className={captionStyle}>
            <span className={captionTextStyle}>{props.captionText}</span>
            <TextField
                onChange={(e) => dispatch({type: props.contactKey, payload: e.target.value})}
                sx={{marginTop: "auto", marginBottom: "auto"}}
                id="outlined-basic" label={props.placeholder}
                variant="outlined" value={contact[props.contactKey]} />
        </div>
    );
}

export default InputWithCaption;
