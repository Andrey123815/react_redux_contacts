import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import './ContactMenu.css';

function ContactMenu() {
    return (
        <div className="contact-menu">
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <PersonAddAlt1Icon />
            </IconButton>
        </div>
    );
}

export default ContactMenu;
