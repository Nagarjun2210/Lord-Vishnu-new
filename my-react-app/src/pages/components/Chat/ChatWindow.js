import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import './ChatWindow.css';

const API_URL = 'http://localhost:5030';

const ChatWindow = ({ onClose }) => {
  const [chatData, setChatData] = useState(null); // for chat history
  const ChatRef = useRef(null);
  const [inputMessage, setInputMessage] = useState(''); // for input field
  const [socket, setSocket] = useState(null);  // <-- New
  const messagesEndRef = useRef(null);

  useEffect(() => {
    ChatRef.current = chatData;
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatData]);

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      try {
        const response = await fetch(`${API_URL}/sendmessagefromuser/user1`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: inputMessage.trim() }),
        });

        console.log('Response status:', response.status);  // Log response status
        const responseBody = await response.json(); // Get the response body
        console.log('Response body:', responseBody);   // Log the response body

        if (!response.ok) {
          throw new Error(`Message failed to send: ${responseBody.error || 'Unknown error'}`);
        }

        setInputMessage('');  // Clear the input field
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
    loadChats();
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

    // Setup socket connection
    const newSocket = io(API_URL);
    setSocket(newSocket);

    // Listen for new messages
    newSocket.on('newMessage', ({ id, message }) => {
      console.log('New message received from socket:', id, message);

      console.log('ChatRef.current.id:', ChatRef.current?.id);
console.log('Incoming message id:', id);
console.log('Should update?', ChatRef.current?.id === id);

      // If the selected chat is the one that received the message, update it
      if (ChatRef.current && ChatRef.current.id === id) {
        setChatData(prev => {
          if (!prev) return prev; // Still loading, do nothing
          return {
            ...prev,
            messages: [...(prev.messages || []), message],
          };
        });
      }
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const loadChats = () => {
    //setIsLoading(true);
    fetch(`${API_URL}/getchatsU/user1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch chats');
        }
        return response.json();
      })
      .then((data) => {
        setChatData(data);
        //setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching chats:', error);
        //setIsLoading(false);
      });
  };
  console.log("message", chatData);

  return (
    <div className="chat-window-container">
      <div className="chat-header">
        <h3>Chat Support</h3>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      <div className="messages-container">
        {chatData && Array.isArray(chatData.messages) ? (
          [...chatData.messages]
            .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
            .map((msg) => (
              <div key={msg.id} className={`message ${msg.sender === 'user' ? 'agent' : 'user'}`}>
                <div className="message-content">{msg.text}</div>
                <div className="message-time">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))
        ) : (
          <div>No messages</div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <input
          className="input-field"
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
