import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import './ContactMenu.css';

function ContactMenu() {
    return (
        <div className="contact-menu">
            <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <MenuIcon style={{width: 40, height: 40, color: "#1976D2"}} />
            </IconButton>
            <div style={{fontSize: 20, textAlign: "center", margin: "auto"}}>Список контактов</div>
            <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <PersonAddAlt1Icon style={{width: 40, height: 40, color: "#1976D2"}} />
            </IconButton>
        </div>
    );
}

export default ContactMenu;
