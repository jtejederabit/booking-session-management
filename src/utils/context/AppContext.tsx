import React, { createContext, useState } from 'react';
export const AppContext = createContext<any>(null);

export const AppProvider: React.FC = ({ children }) => {
    const [sessionData, setSessionData] = useState([])
    const [openNewtModal, setOpenNewModal] = useState(false)
    const [sessionEdit, setSessionEdit] = useState(null)

    return (
        <AppContext.Provider
            value={{
                sessionData,
                openNewtModal,
                sessionEdit,
                setSessionData,
                setOpenNewModal,
                setSessionEdit
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
