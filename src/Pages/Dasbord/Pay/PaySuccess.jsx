import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/AxiosHooks/useAxiosSecure';

const PaySuccess = () => {
    const axiosSecure=useAxiosSecure();
    const [search]=useSearchParams();
    const [paymentinfo,setpaymentinfo]=useState({})
    console.log(paymentinfo)
    const sessionId = search.get("session_id");
    console.log(sessionId)

    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/paymentSuccess?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data);
                setpaymentinfo(res.data)
            })
        }
    },[sessionId,axiosSecure])
    return (
      <div>
        <h1>this is payment success</h1>
        <h1>this is trackingId : {paymentinfo.trackingId}</h1>
        <h1>this is transactionId : {paymentinfo.transactionId}</h1>
      </div>
    );
};

export default PaySuccess;