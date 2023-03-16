import { useState, useContext, useEffect } from "react"
import { Form, Button } from 'react-bootstrap'
import chatService from "../../services/chat.services.js"

const ChatForm = ({ participant_id, setChat }) => {

    const [messageData, setMessageData] = useState({
        message: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setMessageData({ ...messageData, [name]: value })
    }

    useEffect(() => {
        chatService
            .getChat(participant_id)
            .then(({ data }) => setChat(data))
            .catch(err => console.log(err))
    }, [messageData])

    const handleNewMessage = e => {
        e.preventDefault()

        chatService
            .newChat(participant_id, messageData)
            .then(({ data }) => {
                setMessageData({ message: '' })
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Form onSubmit={handleNewMessage}>
                <Form.Group className="ChatForm" controlId="message">
                    <Form.Control type="text" name="message" value={messageData.message} onChange={handleInputChange} />
                </Form.Group>
                <Button variant="dark mt-3" type="submit">Send</Button>
            </Form>
        </>
    )
}

export default ChatForm