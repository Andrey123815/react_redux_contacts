import React, {useContext} from 'react';
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import './LoginForm.css';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {IMainUserInfoContext, IUser, MainUserInfoContext} from "../../configurations/User";
import {useLoginUserMutation} from "../../services/UserAPI";

interface InputState {
    email: string;
    password: string;
    showPassword: boolean;
}

function LoginForm() {
    const userContext = useContext<IMainUserInfoContext>(MainUserInfoContext);
    const [inputValues, setInputValues] = React.useState<InputState>({
        email: '',
        password: '',
        showPassword: false,
    });

    const [login, {isError}] = useLoginUserMutation();
    const handleLoginClick = async () => {
        await login({email: inputValues.email, password: inputValues.password}).unwrap().then((users: IUser[]) => {
            userContext.updateUserInfo(users[0], true);
        });
    }

    if (isError) {
        return <h1>Some error has occurred, try later</h1>
    }

    const handleChange =
        (prop: keyof InputState) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setInputValues({ ...inputValues, [prop]: event.target.value });
        };

    const handleClickShowPassword = () => {
        setInputValues({
            ...inputValues,
            showPassword: !inputValues.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const user = userContext.userInfo.user;

    return (
        <React.Fragment>
            <div className="login-form">
                <span>{user.name}</span>
                <span className="login-form__preview">Log In</span>
                <TextField onChange={handleChange('email')} id="outlined-basic" label="Email" variant="outlined" />
                <FormControl sx={{ mb: "20px", widthMax: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={inputValues.showPassword ? 'text' : 'password'}
                        value={inputValues.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {inputValues.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Button onClick={handleLoginClick} variant="contained">Войти</Button>
            </div>
        </React.Fragment>
    );
}

export default LoginForm;
