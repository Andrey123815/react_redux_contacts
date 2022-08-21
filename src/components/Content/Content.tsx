import React, {useContext} from 'react';
import LoginForm from "../LoginForm/LoginForm";
import {IMainUserInfoContext, MainUserInfoContext} from "../../configurations/User";
import CentralContent from "../CentralContent/CentralContent";
import SideContent from "../SideContent/SideContent";
import './Content.css';

function Content() {
    const userContext = useContext<IMainUserInfoContext>(MainUserInfoContext);

    if (userContext.userInfo.auth) {
        return (
          <div className="content">
              <CentralContent />
              <SideContent />
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
