import React from 'react';


function ChatWindow({ messages, handleMessageChange, handleMessageSubmit, messageInput }) {
    return (
        <div className="flex flex-col h-screen w-1/2  border-0.5 border-gray-300 rounded-lg shadow-xl bg-white">
            <div className="flex-grow overflow-auto">
                <div className="py-4 space-y-4">
                    {messages.map((message) => (
                        <Message 
                            key={message.id} 
                            text={message.text} 
                            sender={message.sender}
                            timestamp={message.timestamp}
                            isUser={message.sender === 'person1'}
                        />
                    ))}
                </div>
            </div>
            <div className="p-4 shadow-inner ">
                <Inputbar 
                    message={messageInput}
                    handleChange={() => {}}
                    handleSubmit={() => {}}
                />
            </div>
        </div>
    );
}

export default ChatWindow;

function Message({ sender, text, isUser, timestamp }) {
  const messageStyle = isUser ? 'bg-blue-400 text-white' : 'bg-green-300 text-black';
  const alignment = isUser ? 'ml-auto' : 'mr-auto';
  const animation = 'transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105';

  return (
      <div className={`max-w-md mx-4 my-2 p-4 rounded-lg shadow-lg ${messageStyle} ${alignment} ${animation}`}>
          <div className="font-bold">{sender}</div>
          <p className="text-sm">{text}</p>
          <div className="text-right text-xs text-gray-200">{timestamp}</div>
      </div>
  );
}


function Inputbar({ message, handleChange, handleSubmit }) {
    return (
        <form className="flex items-center space-x-2 bg-white p-4 rounded-lg" onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={handleChange}
                placeholder="Type a message..."
                className="flex-grow p-2 rounded-lg focus:outline-none focus:bg-gray-200 transition duration-200 ease-in-out transform focus:scale-105"
            />

            <label className="flex items-center px-2 cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M15.172 7l-6.364 6.364M8.808 7h6.364V13.364"></path>
                </svg>
                <input type="file" className="hidden" />
            </label>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none transition duration-200 ease-in-out transform hover:scale-105"
            >
                Send
            </button>
        </form>
    );
}




