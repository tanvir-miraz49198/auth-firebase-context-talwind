import React, { createContext } from 'react';



export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const user = { display: 'Tanvir Hassan'}

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;