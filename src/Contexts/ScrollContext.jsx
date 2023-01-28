import React from 'react';

export const ScrollContext = React.createContext();

export const ScrollContextProvider = ({ children }) => {

    const [isLandingObserved, setIsLandingObserved] = React.useState(false);

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const value = {
        isLandingObserved,
        isDrawerOpen,
        setIsDrawerOpen
    }

    return (<ScrollContext.Provider value={value}>
        {children}
    </ScrollContext.Provider>);
};
