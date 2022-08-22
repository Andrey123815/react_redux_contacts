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
    pattern: RegExp
}

function InputWithCaption(props: Props) {
    const captionStyle: string = `input-with-caption_${props.captionType}`;
    const captionTextStyle: string = `input-with-caption__text_${props.captionType}`;

    const {contact, dispatch} = React.useContext<IContactContext>(CurrentContactContext);
    const matches: string[] = contact[props.contactKey].match(props.pattern) || [];

    const generateErrorText = (key: ContactIdentType): string => {
        switch (key) {
            case 'email':
                return 'Шаблон: welcome@gmail.com';
            case 'name':
                return 'Шаблон: Andrey Diakonov';
            case 'phone':
                return 'Шаблон: 89854325678';
            case 'city':
                return 'Город содержит только буквы';
            case 'street':
                return 'Улица содержит только буквы';
            default:
                return '';
        }
    }

    return (
        <div className={captionStyle}>
            <span className={captionTextStyle}>{props.captionText}</span>
            <TextField
                onChange={(e) => dispatch({type: props.contactKey, payload: e.target.value})}
                sx={{marginTop: "auto", marginBottom: "auto"}}
                id="outlined-basic" label={props.placeholder}
                variant="outlined" value={contact[props.contactKey]}
                error={contact[props.contactKey] !== '' || props.contactKey === 'name' ? !matches.length : false}
                helperText={generateErrorText(props.contactKey)}
                />
        </div>
    );
}

export default InputWithCaption;
