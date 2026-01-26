import React, { useState } from 'react';
import useAxiosSecure from '../../Hooks/AxiosHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FiShieldOff } from 'react-icons/fi';
import { FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const UserManagement = () => {
  const [searchtext,setsearhtext]=useState('')
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users", searchtext],
    queryFn: async () => {
      const result = await axiosSecure.get(`/users?searchtext=${searchtext}`);
      return result.data;
    },
  });
  // console.log(users)

  if (isLoading) {
    return <p>loding...</p>;
  }

  // todo added hendle----
  // const userMakehendle = (user) => {
  //   // ✅ 1. Validate user status before making admin
  //   if (user.status !== "active") {
  //     Swal.fire({
  //       icon: "warning",
  //       title: "Cannot Promote",
  //       text: "Only active users can be promoted to admin.",
  //       showConfirmButton: true,
  //     });
  //     return;
  //   }

  //   // ✅ 2. Prevent promoting users who are already admins
  //   if (user.role === "admin") {
  //     Swal.fire({
  //       icon: "info",
  //       title: "User is already an Admin",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //     return;
  //   }

  //   // ✅ 3. Prepare role change
  //   const roleInfo = { role: "admin" };

  //   // ✅ 4 & 6. Handle API call with proper success and error messages
  //   axiosSecure
  //     .patch(`/users/${user._id}`, roleInfo)
  //     .then((result) => {
  //       // ✅ 4. Show success/failure messages
  //       if (result.data.modifiedCount) {
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: `${user.name} is now an Admin`,
  //           showConfirmButton: false,
  //           timer: 2000,
  //         });

  //         // ✅ 7. Refetch users table after successful update
  //         refetch();

  //         // ✅ 5. Log action (optional)
  //         console.log(`User ${user.email} promoted to admin`);
  //       } else {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Update Failed",
  //           text: "Role update did not succeed",
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err); // ✅ 5. Optional logging
  //       Swal.fire({
  //         icon: "error",
  //         title: "Network Error",
  //         text: "Failed to update user role. Please try again later.",
  //       });
  //     });
  // };

  // userMakehendle--
  const userMakeAdminhendle = (user) => {
    console.log(user);
    const roleInfo = { role: "admin" };

    
    axiosSecure
      .patch(`/users/${user._id}/role`, roleInfo)
      .then((result) => {
        console.log(result.data)
        if (result.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now an Admin`,
            showConfirmButton: false,
            timer: 2000,
          });

          // Refetch users table if needed
          refetch();
        }
      })
      .catch(() => {
        // TODO: Add proper error logging for debugging
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update user role!",
        });
      });
  };

  // userAdminRemovehendle--
  const userAdminRemovehendle = (user) => {
    // console.log(user)
    const roleInfo = { role: "user" };

    axiosSecure
      .patch(`/users/${user._id}/role`, roleInfo)
      .then((result) => {
        if (result.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is no longer an Admin`,
            showConfirmButton: false,
            timer: 2000,
          });

          // Refetch users table if needed
          refetch();
        }
      })
      .catch(() => {
        // console.error(err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to admin remove!",
        });
      });
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center">
        Totall User Management : {users.length}
      </h1>


        {/* search */}
      <label className="input input-bordered flex items-center gap-2 w-full max-w-md mx-auto my-4 shadow-md rounded-xl focus-within:ring-2 focus-within:ring-blue-400 transition-all">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>

        <input
          onChange={(e) => setsearhtext(e.target.value)}
          type="search"
          className="grow bg-transparent outline-none placeholder:text-gray-400"
          placeholder="Search"
        />
      </label>

      <div className="overflow-x-auto">
        {/* table head */}
        <table className="min-w-full divide-y divide-gray-200 rounded-xl shadow-lg bg-white">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-200">
            <tr>
              <th className="px-6 py-3 text-left   text-gray-700 font-bold ">
                Number
              </th>

              <th className="px-6 py-3 text-left  text-gray-700 font-bold ">
                Name
              </th>
              <th className="px-6 py-3 text-left  text-gray-700 font-bold ">
                Email
              </th>
              <th className="px-6 py-3 text-left   text-gray-700 font-bold ">
                Role
              </th>
              <th className="px-6 py-3 text-left   text-gray-700 font-bold ">
                Admin Actions
              </th>
              <th className="px-6 py-3 text-left   text-gray-700 font-bold ">
                Others Actions
              </th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr
                key={user._id || index}
                className="hover:bg-blue-50 transition-all duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                  {index + 1}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-medium">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold 
              bg-gradient-to-r from-green-100 to-green-200 text-green-800"
                  >
                    {user.role}
                  </span>
                </td>

                {/* actions  */}
                <td className="px-4 py-2 text-center">
                  {user.role === "admin" ? (
                    <button
                      onClick={() => userAdminRemovehendle(user)}
                      className="flex items-center justify-center w-10 h-10 bg-red-100 text-red-700 rounded-full shadow-md hover:bg-red-200 transition-all duration-200"
                      title="Admin Role - Cannot change"
                    >
                      <FiShieldOff className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => userMakeAdminhendle(user)}
                      className="flex items-center justify-center w-10 h-10 bg-green-100 text-green-700 rounded-full shadow-md hover:bg-green-200 hover:scale-110 transition-all duration-200"
                      title="Make Admin"
                    >
                      <FaUserShield className="w-5 h-5" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};;

export default UserManagement;