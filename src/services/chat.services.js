import axios from 'axios'

class ChatService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/chat`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getChat(participant_id) {
        return this.api.get(`/${participant_id}`)
    }

    newChat(participant_id, messageData) {
        return this.api.post(`/${participant_id}`, messageData)
    }

    deleteChat(chat_id) {
        return this.api.delete(`/deleteChat/${chat_id}`)
    }

}
const chatService = new ChatService()

export default chatService