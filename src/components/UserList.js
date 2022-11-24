import axios from 'axios';
import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import { getUsers } from './api/api';

const UserList = () => {
    let usersData = useLoaderData();
    let usersArr = usersData.data;

    return (
        <>
            {
                usersArr.map((item, index) => (
                    <h1>{item.id}. {item.name}</h1>

                ))
            }
        </>
    )
}

export default UserList

export function users() {
    return getUsers()
}

// export async function usersList() {
//     let userList = await axios.get("https://jsonplaceholder.typicode.com/users");
//     console.log(userList.data);
// }