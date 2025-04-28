import React from 'react';
import './ChatIcon.css';

const ChatIcon = ({ onClick, unreadCount }) => {
  return (
    <div className="chat-icon-container" onClick={onClick}>
      <svg 
        className="chat-icon-svg" 
        width="30" 
        height="30" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      {unreadCount > 0 && <div className="notification-badge">{unreadCount}</div>}
    </div>
  );
};

export default ChatIcon;