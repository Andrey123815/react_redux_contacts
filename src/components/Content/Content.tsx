import React, {useContext} from 'react';
import LoginForm from "../LoginForm/LoginForm";
import {IMainUserInfoContext, MainUserInfoContext} from "../../configurations/User";
import CentralContent from "../CentralContent/CentralContent";
import SideContent from "../SideContent/SideContent";
import './Content.css';
import {CurrentContactContext, defaultContact, IContact} from "../../configurations/Contact";
import {useGetContactMutation} from "../../services/ContactsAPI";

export type ContactIdentType = 'email' | 'name' | 'phone' | 'city' | 'street';

export type ActionType = ContactIdentType | 'clean' | 'fill';

export interface Action {
    type: ActionType,
    payload?: string | IContact
}

function reducer(state: IContact, action: Action): IContact {
    const {type, payload} = action;

    switch (type) {
        case 'clean':
            return defaultContact;
        case 'fill':
            return payload as IContact;
        default:
            return {
                ...state,
                [type]: payload
            };
    }
}

function Content() {
    const userContext = useContext<IMainUserInfoContext>(MainUserInfoContext);
    const [isUpdatingMode, setIsUpdatingMode] = React.useState<boolean>(false);

    let userContact: IContact = defaultContact;
    userContact.contactOwnerID = userContext.userInfo.user.id;

    const [contact, dispatch] = React.useReducer(reducer, userContact);
    const [getCertainContact,] = useGetContactMutation();

    const contactClick = async(id: number) => {
        await getCertainContact(id).unwrap().then((contacts: IContact[]) => {
            dispatch({type: 'fill', payload: contacts[0]});
        });
        setIsUpdatingMode(true);
    }

    if (userContext.userInfo.auth) {
        return (
          <div className="content">
              <CurrentContactContext.Provider value={{contact, dispatch}} >
                  <CentralContent updateInfo={{isUpdatingMode, setIsUpdatingMode}} />
                  <SideContent contactClick={contactClick}/>
              </CurrentContactContext.Provider>
          </div>
        );
    }

    return (
        <>
            <LoginForm />
        </>
    );
}

export default Content;
