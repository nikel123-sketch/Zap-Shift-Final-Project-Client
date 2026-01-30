import React from 'react';
import useRole from '../../../Hooks/Role/useRole';
import AdminDashbord from './AdminDashbord';
import RiderDashbord from './RiderDashbord';
import UserDashbord from './UserDashbord';
import Loading from '../../../Component/Loading/Loading';

const DashbordHome = () => {
    const { role, isLoading } = useRole();

    if(isLoading){
        return <Loading></Loading>
    }
    if(role=='admin'){
        return <AdminDashbord></AdminDashbord>
    }
    else if(role=='rider'){
        return <RiderDashbord></RiderDashbord>
    }
    else{
        return <UserDashbord></UserDashbord>
    }
    
};

export default DashbordHome;