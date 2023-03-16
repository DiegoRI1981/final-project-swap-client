import axios from 'axios'

class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    profile(userData) {
        return this.api.get('/profile', userData)
    }
    edit(user_id, data) {
        return this.api.put(`/edit/${user_id}`, user_id, data)
    }
    delete(user_id) {
        return this.api.delete('/delete', user_id)
    }


}

const userService = new UserService()

export default userService

