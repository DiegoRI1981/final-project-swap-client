import { useState, useEffect } from "react"
import { Card } from 'react-bootstrap'
import chatService from "../../services/chat.services.js"
import ChatForm from "../ChatForm/ChatForm"
import ChatList from "../ChatList/ChatList"
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from "react"

const ChatBox = ({ participant_id, setChat, chat }) => {

    const { user } = useContext(AuthContext)


    return (
        <Card>
            <Card.Header>Chat with:{participant_id}</Card.Header>
            <Card.Body>
                {chat ? (
                    <>
                        <ChatList chat={chat} />
                        <ChatForm participant_id={participant_id} setChat={setChat} />
                    </>
                ) : (
                    <p>Loading chat...</p>
                )}
            </Card.Body>
        </Card>
    )
}

export default ChatBox