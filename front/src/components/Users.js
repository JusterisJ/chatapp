import React, {useEffect, useState} from 'react';
import {getAllUsersData} from "../api/library/UsersAPI";
import UserCard from "./UserCard";
import "./users.css"

export default function Users () {
    useEffect(()=> {
        getAllUsersData().then((data)=> {
            setUsers(data.data.data.users)
            console.log(data.data.data.users)
        })
    }, [])
    const [users, setUsers] = useState([])
    let usersDiv = []
    if (users.length > 0) {
        usersDiv = users.map((user) => {
            return <UserCard image={user.img} name={user.name}/>
        })
    }
    return (
        <div className="users">
            {usersDiv.length > 0 && usersDiv}
        </div>
    );
};

