import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ChatBox from "../../components/ChatBox/ChatBox"
import ChatList from "../../components/ChatList/ChatList"
import chatService from "../../services/chat.services.js"


const ChatBoxPage = () => {

    const { participant_id } = useParams()

    const [chat, setChat] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {

        chatService
            .getChat(participant_id)
            .then(({ data }) => setChat(data))
            .catch(err => console.log(err))

    }

    return (
        <Container>
            <h3>Chat</h3>
            <Row>
                <Col md={{ span: 4 }} className='mt-3'>
                    <ChatBox participant_id={participant_id} setChat={setChat} chat={chat} />
                </Col>
            </Row>
        </Container>
    )
}

export default ChatBoxPage






