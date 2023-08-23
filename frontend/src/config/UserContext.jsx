import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = (({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    return <UserContext.Provider value={{ currentUser, setCurrentUser, dummy: 'Im dummy' }}>
        {children}
    </UserContext.Provider>
})

export function useAuth() {
    return useContext(UserContext);
}

export {UserProvider, UserContext}

export default UserProvider