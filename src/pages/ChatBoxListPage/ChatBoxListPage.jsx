import { Container } from "react-bootstrap"
import AllChats from "../../components/AllChats/AllChats"
import Loader from "../../components/Loader/Loader"
import { useEffect, useState } from "react"
import chatService from "../../services/chat.services"


const ChatBoxListPage = () => {

    const [chats, setChats] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadChats()
    }, [])

    const loadChats = () => {
        chatService
            .getChat()
            .then(({ data }) => {
                setChats(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }



    return (
        <>
            <Container >
                {
                    isLoading
                        ?
                        <Loader />
                        :

                        <>

                            <h3>Chat List</h3>
                            <hr />

                            <AllChats Chats={chats} />


                        </>

                }
            </Container>
        </>
    )
}
export default ChatBoxListPage