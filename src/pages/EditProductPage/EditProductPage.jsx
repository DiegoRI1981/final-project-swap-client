import { Container } from "react-bootstrap"
import EditProductForm from "../../components/EditProductForm/EditProductForm"
import { useNavigate } from "react-router-dom"

const EditProductPage = () => {

    const navigate = useNavigate()
    const fireFinalActions = () => {
        navigate('/profile')
    }

    return (

        <Container>
            <h3>Update product</h3>
            <EditProductForm fireFinalActions={fireFinalActions} />
        </Container>

    )

}

export default EditProductPage