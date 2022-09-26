import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';


const Users = () => {
    const {data:users}=useQuery('users',()=>fetch(`https://pure-oasis-80814.herokuapp.com/users`).then(res=>res.json()));
    return (
        <div>
            <h2>Allusers:{users.length} </h2>
            {
            users.map(user=><UserRow
            key={user._id}
            user={user}
            ></UserRow>)
            }
        </div>
    );
};

export default Users;