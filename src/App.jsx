import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import ChatWindow from "./components/Chatwindow";
import Footer from './components/footer';



function App() {
    const [messages, setMessages] = useState(["Hello there!", "How are you?", "I'm doing great!", "What are you up to?", "I'm just working on my project.", "That's cool!"]);
    const [messageInput, setMessageInput] = useState('');

    const messages_list = messages.map((message, index) => ({ id: index + 1, text: message, sender: index % 2 == 0 ?'person2'  : 'person1' , timestamp: '12:00'}));

    const handleMessageChange = (event) => {
        setMessageInput(event.target.value);
    };

    const handleMessageSubmit = (event) => {
        event.preventDefault();
        if (!messageInput.trim()) return; // Prevent empty messages

        const newMessage = { 
            id: messages.length + 1, 
            text: messageInput, 
            sender: 'person1' // Assuming 'person1' is the user
        };
        setMessages([...messages, newMessage]);
        setMessageInput(''); // Clear the input field after sending

        // TODO: Send the message to the backend/Large Language Model
    };

    return (
        <div className="App flex flex-col h-screen">
            <Header />
            <ChatWindow 
                messages={messages_list} 
                handleMessageChange={handleMessageChange} 
                handleMessageSubmit={handleMessageSubmit} 
                messageInput={messageInput}
            />
            
        </div>
    );
}

export default App;
