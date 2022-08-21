import React from 'react';
import TextField from '@mui/material/TextField';
import './InputWithCaption.css';

type Caption = 'top' | 'side';

interface Props {
    type: Caption,
    captionText: string,
    placeholder: string
}

function InputWithCaption(props: Props) {
    const captionStyle: string = `input-with-caption_${props.type}`;
    const captionTextStyle: string = `input-with-caption__text_${props.type}`;

    return (
        <div className={captionStyle}>
            <span className={captionTextStyle}>{props.captionText}</span>
            <TextField sx={{marginTop: "auto", marginBottom: "auto"}} id="outlined-basic" label={props.placeholder} variant="outlined" />
        </div>
    );
}

export default InputWithCaption;
