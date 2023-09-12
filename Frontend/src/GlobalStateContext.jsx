import React, { createContext, useState, useContext } from 'react';

// Create the context
export const GlobalStateContext = createContext();

// Create the provider
export const GlobalStateProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
        chores: [],
        kids: [],
        rewards: [],
        // Add any more state variables here
    });

    return (
        <GlobalStateContext.Provider value={{ state, setState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// Custom hook to use the GlobalStateContext
export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};
