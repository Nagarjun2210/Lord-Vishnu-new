import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import './ChatWindow.css';

const socket = io('http://localhost:5030'); // connect to backend server

const ChatWindow = ({ onClose, messages, onSendMessage }) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);

  const handleSendMessage = async () => {
    if (message.trim()) {
      try {
        const response = await fetch('http://localhost:5030/sendmessagefromuser/user1', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: message.trim() }),
        });
  
        console.log('Response status:', response.status);  // Log response status
        const responseBody = await response.json(); // Get the response body
        console.log('Response body:', responseBody);   // Log the response body
  
        if (!response.ok) {
          throw new Error(`Message failed to send: ${responseBody.error || 'Unknown error'}`);
        }
  
        onSendMessage(message);  // Update UI
        setMessage('');  // Clear the input field
      } catch (error) {
        console.error('Error sending message:', error.message); // Log detailed error message
      }
    }
  };
  
  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

    // Listen for any incoming new messages (optional if you want)
    socket.on('newMessage', (data) => {
      console.log('New message received:', data);
      // You can update UI if needed
    });

    return () => {
      socket.off('newMessage');
    };
  }, []);

  return (
    <div className="chat-window-container">
      <div className="chat-header">
        <h3>Chat Support</h3>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`message ${msg.isUser ? 'user-message' : 'system-message'}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
