import React, {useContext} from 'react';
import {AppBar, Toolbar, Box, Menu, IconButton, Tooltip, MenuItem, Avatar, Typography} from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {defaultUserInfo, IMainUserInfoContext, IUser, MainUserInfoContext} from "../../configurations/User";
import {stringAvatar} from "../../libraries/AvatarView";

const AuthUserSettings: string[] = ['Profile', 'Account', 'Dashboard', 'Logout'];
const NotAuthUserSettings: string[] = ['Login'];
const DefaultUsername: string = 'User';

function Header() {
    const userContext = useContext<IMainUserInfoContext>(MainUserInfoContext);
    const [anchorElUser, setAnchorElUser] = React.useState<null | undefined |  HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (setting: string) => {
        setAnchorElUser(null);

        switch (setting) {
            case AuthUserSettings[3]:
                userContext.updateUserInfo(defaultUserInfo.user, false);
                break;
        }
    };

    const settings = userContext.userInfo.auth ? AuthUserSettings : NotAuthUserSettings;
    const user: IUser = userContext.userInfo.user;
    let username: string = 'User';
    if (user && user.name) {
        username = user.name;
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <AutoStoriesIcon sx={{ mr: 1 }}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1
                        }}
                    >
                        Contact's
                    </Typography>

                    <Typography sx={{ mr: 2, fontSize: 20 }}>
                        {userContext.userInfo.user?.name || DefaultUsername}
                    </Typography>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar {...stringAvatar(username)} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
