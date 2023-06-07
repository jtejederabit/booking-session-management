import React, { createContext, useState } from 'react';
export const AppContext = createContext<any>(null);

export const AppProvider: React.FC = ({ children }) => {
    const [sessionData, setSessionData] = useState([])

    return (
        <AppContext.Provider
            value={{
                sessionData,
                setSessionData,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
