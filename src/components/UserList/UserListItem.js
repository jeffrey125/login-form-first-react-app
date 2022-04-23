import React from 'react';

const UserListItem = props => {
  return (
    <li className="text-2xl font-bold border-gray-200-200 border-2 p-4 shadow shadow-gray-300 animate-fadeIn">
      {props.user} {props.age}
    </li>
  );
};

export default UserListItem;
