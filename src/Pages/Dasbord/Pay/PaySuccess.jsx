import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/AxiosHooks/useAxiosSecure';

const PaySuccess = () => {
    const axiosSecure=useAxiosSecure();
    const [search]=useSearchParams();
    
    const sessionId = search.get("session_id");
    // console.log(sessionId)

    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/paymentSuccess?session_id=${sessionId}`)
            .then(res=>console.log(res.data))
        }
    },[sessionId,axiosSecure])
    return (
        <div>
            <h1>this is payment success</h1>
        </div>
    );
};

export default PaySuccess;