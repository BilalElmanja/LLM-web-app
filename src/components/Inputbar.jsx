import React from 'react';

function Inputbar({ message, handleChange, handleSubmit }) {
    return (
        <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={handleChange}
                placeholder="Type a message..."
                className="flex-grow p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <label className="flex items-center px-2 cursor-pointer">
                <span className="text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M15.172 7l-6.364 6.364M8.808 7h6.364V13.364"></path>
                    </svg>
                </span>
                <input type="file" className="hidden" />
            </label>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
            >
                Send
            </button>
        </form>
    );
}

export default Inputbar;
