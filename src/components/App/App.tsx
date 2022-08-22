import React, {useState} from 'react';
import Header from "../Header/Header";
import Content from "../Content/Content";
import {defaultUser, defaultUserInfo, IUser, IUserInfo, MainUserInfoContext} from "../../configurations/User";

function App() {
    const [userInfo, setUserInfo] = useState<IUserInfo>(defaultUserInfo);
    const updateUser = (user: IUser = defaultUser, auth: boolean = false) => setUserInfo({user, auth});

    return (
        <MainUserInfoContext.Provider value={{userInfo: userInfo, updateUserInfo: updateUser}}>
            <Header />
            <Content />
        </MainUserInfoContext.Provider>
    );
}

export default App;
