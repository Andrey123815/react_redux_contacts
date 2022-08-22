import {defaultUserInfo, IMainUserInfoContext, IUser, IUserLikeContact} from "./User";
import React, {createContext} from "react";
import {Action} from "../components/Content/Content";

export interface IContact extends IUserLikeContact {
    id: number,
    contactOwnerID: number,
}

export const defaultContact: IContact = {
    city: "", phone: "", street: "",
    contactOwnerID: 0, email: "", id: 0, name: ""
}

const noop = (action: Action) => {};

export interface IContactContext {
    contact: IContact,
    dispatch: (action: Action) => void
}

export const defaultContactContext: IContactContext = {
    contact: defaultContact,
    dispatch: noop
}

export const CurrentContactContext = React.createContext<IContactContext>(defaultContactContext);
