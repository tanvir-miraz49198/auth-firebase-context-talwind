import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
           <h1> {user && <span>{user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;