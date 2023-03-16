import axios from 'axios'

class AdminService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/admin`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    allProfiles() {
        return this.api.get('/allProfiles')
    }
    userProfile(user_id) {
        return this.api.get(`/userProfile/${user_id}`)
    }


}

const adminService = new AdminService()

export default adminService
