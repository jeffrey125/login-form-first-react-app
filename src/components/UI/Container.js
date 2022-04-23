import React from 'react';

const Container = props => {
  // Components style
  return (
    <div className="bg-white container mx-auto w-[80rem] mt-10 p-5 shadow shadow-white rounded-xl">
      {props.children}
    </div>
  );
};

export default Container;
