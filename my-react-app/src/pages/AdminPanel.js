import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';  // <-- New
import './styles/AdminChatDashboard.css';

const API_URL = 'http://localhost:5030';

const AdminChatDashboard = () => {
  const [activeChats, setActiveChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const selectedChatRef = useRef(null);
  const [socket, setSocket] = useState(null);  // <-- New

  // Fetch chats from server
  useEffect(() => {
    selectedChatRef.current = selectedChat;
  }, [selectedChat]);
  
  useEffect(() => {
    loadChats();

    // Setup socket connection
    const newSocket = io(API_URL);
    setSocket(newSocket);

    // Listen for new messages
    newSocket.on('newMessage', ({ id, message }) => {
      console.log('New message received from socket:', id, message);
    
      // Update active chats
      setActiveChats(prevChats =>
        prevChats.map(chat =>
          chat.id === id
            ? { ...chat, messages: [...chat.messages, message] }
            : chat
        )
      );
    
      // If the selected chat is the one that received the message, update it
      if (selectedChat?.id === id) {
        setSelectedChat(prev => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
    });
    
    // Listen for status updates
    newSocket.on('statusUpdated', ({ id, status }) => {
      setActiveChats(prevChats =>
        prevChats.map(chat =>
          chat.id === id ? { ...chat, status } : chat
        )
      );

      if (selectedChat?.id === id) {
        setSelectedChat(prev => ({
          ...prev,
          status,
        }));
      }
    });

    // Cleanup on unmount
    return () => {
      newSocket.disconnect();
    };
  }, [selectedChat?.id]);

  const loadChats = () => {
    setIsLoading(true);
    fetch(`${API_URL}/getchats`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch chats');
        }
        return response.json();
      })
      .then((data) => {
        setActiveChats(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching chats:', error);
        setIsLoading(false);
      });
  };

  const filteredChats = activeChats.filter(chat =>
    chat.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.issueType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedChat) return;
  
    try {
      console.log(Date.now())
      const newMessageObj = {
        id: `msg-${Date.now()}`,
        text: newMessage.trim(),
        timestamp: new Date().toISOString(),
        sender: 'admin'
      };
      
      await fetch(`${API_URL}/sendmessage/${selectedChat.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMessageObj)
      });
  
      setNewMessage('');
      // No need to manually update UI, socket.io will handle it automatically
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  

  const updateChatStatus = async (id, newStatus) => {
    try {
      await fetch(`${API_URL}/updatestatus/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      // No need to manually update UI, socket.io will handle it automatically
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Live Chat Dashboard</h1>
        <div className="stats-bar">
          <div className="stat">
            <span className="stat-value">{activeChats.length}</span>
            <span className="stat-label">Total Chats</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {activeChats.filter(c => c.status === 'active').length}
            </span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {activeChats.filter(c => c.status === 'waiting').length}
            </span>
            <span className="stat-label">Waiting</span>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="chat-list">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search chats..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {isLoading ? (
            <div className="loading">Loading chats...</div>
          ) : (
            <div className="chat-list-container">
              {filteredChats.map(chat => (
                <div
                  key={`${chat.id + chat.startTime}`}
                  className={`chat-item ${selectedChat?.id === chat.id ? 'active' : ''} ${chat.status}`}
                  onClick={() => setSelectedChat(chat)}
                >
                  <div className="chat-item-header">
                    <span className="user-name">{chat.userName}</span>
                    <span className="chat-status">{chat.status}</span>
                  </div>
                  <div className="chat-item-preview">
                    {chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text.substring(0, 50) : 'No messages yet'}...
                  </div>
                  <div className="chat-item-footer">
                    <span className="issue-type">{chat.issueType}</span>
                    {chat.unreadMessages > 0 && (
                      <span className="unread-count">{chat.unreadMessages}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="chat-viewer">
          {selectedChat ? (
            <>
              <div className="chat-viewer-header">
                <div>
                  <h3>{selectedChat.userName}</h3>
                  <div className="chat-meta">
                    <span className={`status-badge ${selectedChat.status}`}>
                      {selectedChat.status}
                    </span>
                    <span className="issue-type">{selectedChat.issueType}</span>
                    <span className="start-time">
                      Started: {new Date(selectedChat.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
                <div className="chat-actions">
                  <select
                    value={selectedChat.status}
                    onChange={(e) => updateChatStatus(selectedChat.id, e.target.value)}
                  >
                    <option value="active">Active</option>
                    <option value="waiting">Waiting</option>
                    <option value="resolved">Resolved</option>
                    <option value="spam">Spam</option>
                  </select>
                </div>
              </div>

              <div className="message-history">
                {[...selectedChat.messages]
                  .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
                  .map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender === 'user' ? 'user' : 'agent'}`}>
                      <div className="message-content">
                        {msg.text}
                      </div>
                      <div className="message-time">
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  ))}
              </div>

              <div className="message-input">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </>
          ) : (
            <div className="no-chat-selected">
              <h3>Select a chat from the list</h3>
              <p>Click on any conversation to view details and respond</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminChatDashboard;
