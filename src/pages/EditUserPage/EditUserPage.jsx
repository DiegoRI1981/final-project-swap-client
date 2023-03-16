import { Container } from "react-bootstrap"
import EditUserForm from "./../../components/EditUserForm/EditUserForm"
import { useNavigate } from "react-router-dom"


const EditUserPage = () => {

    const navigate = useNavigate()
    const fireFinalActions = () => {
        navigate('/profile')
    }

    return (
        <Container>
            <h3>Update User</h3>
            <EditUserForm fireFinalActions={fireFinalActions} />
        </Container>
    )
}

export default EditUserPage