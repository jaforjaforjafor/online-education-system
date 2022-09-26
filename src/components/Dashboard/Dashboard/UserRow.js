import React from 'react';

const UserRow = ({user}) => {
    const {email}=user;
    return (
       <tr>
        <th>users are here</th>
        <td>{email}</td>
       </tr>
    );
};

export default UserRow;