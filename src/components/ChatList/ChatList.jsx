import React from 'react';

const ChatList = ({ chat }) => {

    return (
        <div>
            <h2>Message List</h2>
            <ul>
                {chat[0]?.messages?.map((m) => (
                    <li key={m?._id}>
                        {m?.message} ({new Date(m.createdAt).toLocaleString()})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatList