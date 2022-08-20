import React from 'react';
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import './LoginForm.css';
import {Visibility, VisibilityOff} from "@mui/icons-material";
// import {userApi} from "./LoginFormAPI";
import {userApi, useLoginUserMutation, IUser} from "../../services/user";
import {flatten} from "@reduxjs/toolkit/dist/query/utils";

interface State {
    auth: boolean
    email: string;
    password: string;
    showPassword: boolean;
}

function LoginForm() {
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        auth: false,
        showPassword: false,
    });
    const [user, setUser] = React.useState<IUser>({
        name: "User"
    });

    const [login, {data, isLoading, isError}] = useLoginUserMutation();

    const handleLoginClick = async () => {
        await login({email: "@", password: "1"}).unwrap();
        // if ((data as IUser).name !== '') {
        //     console.log(1);
            // setUser(data.user);
            // setValues({ ...values, auth: true})
        // }
    }

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className="login-form">
            <span className="login-form__preview">Log In</span>
            <TextField onChange={handleChange('email')} id="outlined-basic" label="Email" variant="outlined" />
            <FormControl sx={{ mb: "20px", widthMax: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <Button onClick={handleLoginClick} variant="contained">Войти</Button>
        </div>
    );
}

export default LoginForm;
