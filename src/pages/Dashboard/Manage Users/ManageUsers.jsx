import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseaxiosSecure from '../../../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const axiosSecure = UseaxiosSecure()
    const {refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    })
    const updateRole = (user, role) => {

        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to change ${user.displayName}'s role to ${role}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, make ${role}`,
            cancelButtonText: "Cancel"
        }).then((result) => {

            if (result.isConfirmed) {
                const roleInfo = { role: role }

                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                icon: "success",
                                title: "Role Updated",
                                text: `${user.displayName} is now ${role}`,
                                timer: 1500,
                                showConfirmButton: false,
                            });
                        }
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: "error",
                            title: "Failed!",
                            text: "Role update failed",
                        });
                    });
            }

        });
    };


    const MakeAdmin = (user) => {
        updateRole(user,'admin')
        

    }

    const makeCreator=(user)=>{
        updateRole(user, 'Creator')
    }
    const makeUser=(user)=>{
        updateRole(user, 'user')
    }

   
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
            <p className="text-gray-500 mb-6">See all users & change roles</p>


            <div className="overflow-x-auto bg-white shadow rounded-2xl">
                <table className="table w-full">
                    <thead className="bg-gray-100">
                        <tr className="text-left">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className="hover">
                                <td>{index + 1}</td>
                                <td className="font-medium text-[16px] flex items-center gap-3 "><img className='w-[70px] h-[70px] rounded-full' src={user.photoURL} alt="" /> {user.displayName}</td>
                                <td className="text-[16px]  text-gray-500">{user.email}</td>
                                <td>
                                    <span
                                        className={`px-3 py-1 text-[16px] rounded-full text-xs font-semibold
                                            ${user.role === "admin" && "bg-red-100 text-red-600"}
                                            ${user.role === "Creator" && "bg-blue-100 text-blue-600"}
                                            ${user.role === "user" && "bg-green-100 text-green-600"}`}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td className="text-center space-x-2">
                                    <button onClick={()=>makeUser(user)} className="btn btn-xs  text-[16px] py-4 px-2 bg-green-500 text-white hover:bg-green-600">
                                        User
                                    </button>
                                    <button onClick={() => makeCreator(user)} className="btn btn-xs  text-[16px] py-4 px-2 bg-blue-500 text-white hover:bg-blue-600">
                                        Creator
                                    </button>
                                    <button onClick={()=>MakeAdmin(user)} className="btn text-[16px] py-4 px-2 btn-xs bg-red-500 text-white hover:bg-red-600">
                                        Admin
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;