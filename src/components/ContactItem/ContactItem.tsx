import React from 'react';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import SendIcon from '@mui/icons-material/Send';

function ContactItem() {
    return (
        <div className="contact-item">
            <div className="contact-item__user-info">
                <div className="user-info__up-line">

                </div>
                <div className="user-info__info-line">
                            
                </div>
                <div className="user-info__info-line">

                </div>
            </div>
            <div className="contact-item__side-menu">
                <DeleteSweepIcon />
                <SendIcon />
            </div>
        </div>
    );
}

export default ContactItem;
