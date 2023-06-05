import React, { createContext, useState } from 'react';

// Crea el contexto
export const AppContext = createContext<any>(null);

// Crea el proveedor del contexto
export const AppProvider: React.FC = ({ children }) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <AppContext.Provider
            value={{
        count,
            incrementCount,
            decrementCount
    }}
>
    {children}
    </AppContext.Provider>
);
};
