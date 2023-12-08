import React from 'react';

function Header() {
    return (
        <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <button className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    Settings
                </button>

                <nav className="flex-grow">
                    <ul className="flex justify-center space-x-6">
                        <li className="hover:text-gray-200 cursor-pointer">Home</li>
                        <li className="hover:text-gray-200 cursor-pointer">About</li>
                        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
                    </ul>
                </nav>

                <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold">ChatIA</h1>
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                        <img src="path-to-your-account-image.jpg" alt="Account" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
