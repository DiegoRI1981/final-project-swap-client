import React from 'react';

const ChatMessages = ({ messages }) => {

    return (
        <div>
            <h2>Chat Messages</h2>
            {messages.length === 0 ? (
                <p>No messages yet</p>
            ) : (
                <ul>
                    {messages.map((message) => (
                        <li key={message._id}>{message.message}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ChatMessages