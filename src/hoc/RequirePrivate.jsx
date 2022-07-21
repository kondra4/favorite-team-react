import React from 'react';
import {Navigate} from 'react-router-dom'
import {useContext} from 'react';

import {AuthContext} from '../context/AuthContext';

const RequirePrivate = ({children}) => {

    const {isAuth} = useContext(AuthContext)

    if (!isAuth) {

        return <Navigate to="/signin"/>
    }

    return children;
}

export {RequirePrivate};
