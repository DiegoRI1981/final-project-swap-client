import { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import UsersList from "../../components/UserList/UserList"
import adminService from "../../services/admin.services"


const UsersListPage = () => {
    // const [showModal, setShowModal] = useState(false)
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        loadServices()
    }, [])
    const loadServices = () => {
        adminService
            .allProfiles()
            .then(({ data }) => {
                setUsers(data)
                setIsLoading(false)
                console.log(data)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="listUser">
            <Container>

                <h3>Users profiles</h3>
                <hr />

                <UsersList users={users} />
            </Container>
        </div>
    )
}
export default UsersListPage







