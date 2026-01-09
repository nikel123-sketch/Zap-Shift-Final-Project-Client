import React, { useContext } from 'react';
import { AuthContex } from '../Contex/AuthContex/AuthContex';

const useAuth = () => {
    const authinfo=useContext(AuthContex)
    return authinfo;
};

export default useAuth;