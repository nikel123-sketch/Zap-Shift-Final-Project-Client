import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from '../useAuth';
import { useNavigate } from 'react-router';

 const instance = axios.create({
   baseURL: "http://localhost:5000",
 });
const useAxiosSecure = () => {
  const navigate=useNavigate()
  // useAuth--
  const { user, singOutUser } = useAuth();

  // useeffect--
  useEffect(()=>{

    // intercept request---
    const requestInterceptor=instance.interceptors.request.use(config=>{
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    })

    // interceptor response---
    const responseInterceptor=instance.interceptors.response.use((res)=>{
      return res;
    },(err)=>{
      const statusCode=err.status;
      if(statusCode===401 || statusCode===403){
        singOutUser()
        .then(()=>{
          navigate("/auth/login");

        })
      }
      return Promise.reject(err)

    })

    return ()=>{
      // ---------req----
      instance.interceptors.request.eject(requestInterceptor)

      // res-------------
      instance.interceptors.response.eject(responseInterceptor)
    }
  },[user,navigate,singOutUser])
   
    return instance;
};

export default useAxiosSecure;