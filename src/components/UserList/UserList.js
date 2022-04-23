import React from 'react';
import UserListItem from './UserListItem';

const UserList = props => {
  return (
    <ul className="flex flex-col gap-6">
      {props.renderData.map(data => (
        <UserListItem key={data.id} user={data.user} age={data.age} />
      ))}
    </ul>
  );
};

export default UserList;
