import React from 'react';
import useAuth from '../useAuth';
import useAxiosSecure from '../AxiosHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
    const {data:role='user',isLoading}=useQuery({
        queryKey:['user-role',user?.email],
        queryFn: async()=>{
            const result =await axiosSecure.get(`/users/${user?.email}/role`)
            return result.data.role
        }
    })
    
    return {isLoading,role}
};

export default useRole;