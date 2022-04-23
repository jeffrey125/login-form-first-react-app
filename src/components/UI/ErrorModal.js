import React from 'react';

const ErrorModal = props => {
  const confirmHandler = () => {
    return props.hideModalError(true);
  };

  const hideModal = props.showModalError
    ? 'opacity-100 scale-100'
    : 'opacity-0 scale-0 -translate-y-full';

  return (
    <div
      className={
        hideModal +
        ' z-[100] absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center h-screen w-full transition duration-300 ease-out'
      }
    >
      <div className="-translate-y-60 shadow shadow-white rounded-2xl">
        <div className="bg-blue-200 w-[50rem] h-[5rem] text-4xl font-bold  p-5 rounded-tr-2xl rounded-tl-2xl">
          {props.modalError.title}
        </div>
        <div className="flex flex-col justify-between bg-white w-[50rem] h-[20rem] text-4xl font-bold p-5 text-ellipsis rounded-br-2xl rounded-bl-2xl">
          {props.modalError.message}
          <button
            onClick={confirmHandler}
            className="self-end flex justify-center items-center bg-blue-600 w-52 rounded-md p-5 hover:bg-blue-800 active:bg-blue-800 focus:outline-none focus:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] transition-all delay-50 duration-300 text-white"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
