import {IUserLikeContact} from "./User";

export interface IContact extends IUserLikeContact {
    id: number,
    contactOwnerID: number,
}

export const defaultContact: IContact = {
    city: "", phone: "", street: "",
    contactOwnerID: 0, email: "", id: 0, name: ""
}
