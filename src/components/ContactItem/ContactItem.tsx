import React from 'react';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import SendIcon from '@mui/icons-material/Send';
import {Avatar} from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import './ContactItem.css';
import {stringAvatar} from "../../libraries/AvatarView";
import IconButton from "@mui/material/IconButton";
import {IContact} from "../../configurations/Contact";

interface Props {
    contact: IContact,
    onDelete: () => void,
    onUpdate?: () => void
}

const PropertyNotSet: string  = 'не задан';

function ContactItem(props: Props) {
    const {name, email, phone} = props.contact;
    return (
        <div className="contact-item">
            <div className="contact-item__user-info">
                <div className="user-info__up-line">
                    <Avatar {...stringAvatar(name)} />
                    <div className="up-line__username">
                        {name}
                    </div>
                    <div className="up-line__status">
                        <VerifiedIcon style={{color: "#1976D2"}} />
                    </div>
                </div>
                <div className="user-info__info-line">
                    Email: &nbsp;&nbsp;&nbsp;{email ? email : PropertyNotSet}
                </div>
                <div className="user-info__info-line">
                    Телефон: &nbsp;&nbsp;&nbsp;{phone ? phone : PropertyNotSet}
                </div>
            </div>
            <div className="contact-item__side-menu">
                <IconButton onClick={props.onDelete}>
                    <DeleteSweepIcon sx={{width: 35, height: 35, color: 'grey'}}/>
                </IconButton>
                <IconButton>
                    <SendIcon sx={{width: 30, height: 30}}/>
                </IconButton>
            </div>
        </div>
    );
}

export default ContactItem;
