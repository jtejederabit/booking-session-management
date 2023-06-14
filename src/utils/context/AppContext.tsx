import React, { createContext, useState } from 'react';
import { sessionData as sessions} from '../mock/session.mock.data'
import { usersData as users} from '../mock/users.mock.data.js'
export const AppContext = createContext<any>(null);


export const AppProvider: React.FC = ({ children }) => {
    const [sessionData, setSessionData] = useState(sessions)
    const [allUsers, setAllUsers] = useState(users)
    const [moveUser, setMoveUser] = useState(null)
    const [openNewtModal, setOpenNewModal] = useState(false)
    const [sessionEdit, setSessionEdit] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <AppContext.Provider
            value={{
                sessionData,
                openNewtModal,
                sessionEdit,
                allUsers,
                moveUser,
                loggedIn,
                setLoggedIn,
                setMoveUser,
                setAllUsers,
                setSessionData,
                setOpenNewModal,
                setSessionEdit
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
