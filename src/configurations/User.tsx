import React from "react";

export interface IUser {
    id?: number,
    name?: string,
    avatar?: string,
    email: string,
    password?: number,
    address?: {
        city: string,
        street: string,
        zipcode?: string,
    },
    phone?: string,
}

export interface IUserInfo {
    user: IUser,
    auth: boolean,
}

export interface IMainUserInfoContext {
    userInfo: IUserInfo
    updateUserInfo: (user: IUser, auth: boolean) => void
}

export const defaultUserInfo: IUserInfo = {
    user: {email: ''},
    auth: false
};

const noop = (user: IUser, auth: boolean) => {};

export const defaultUserContext: IMainUserInfoContext = {
    userInfo: defaultUserInfo,
    updateUserInfo: noop
}

export const MainUserInfoContext = React.createContext<IMainUserInfoContext>(defaultUserContext);
