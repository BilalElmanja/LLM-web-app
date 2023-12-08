import React from 'react'

const Message = ({ text, isUser }) => {
  const messageStyle = isUser ? 'bg-blue-400 text-white' : 'bg-green-300 text-black';
  const alignment = isUser ? 'ml-auto' : 'mr-auto';
  const animation = 'transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105';

  return (
      <div className={`max-w-md mx-4 my-2 p-4 rounded-lg shadow-lg ${messageStyle} ${alignment} ${animation}`}>
          <p>{text}</p>
      </div>
  );
}

export default Message

