import ChatBox from './../ChatBox/ChatBox'
import { Col, Row } from "react-bootstrap"

const AllChats = ({ chats }) => {

    return (

        <Row>

            {
                chats.map(elm => {
                    return (
                        <Col md={{ span: 4 }} key={elm._id} >
                            <ChatBox {...elm} />
                        </Col>
                    )
                })
            }

        </Row >

    )
}

export default AllChats