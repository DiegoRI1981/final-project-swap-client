import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import NewProductForm from "../../components/NewProductForm/NewProductForm"

const NewProductPage = () => {

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/profile')
    }

    return (
        <Container>
            <h3>New product</h3>
            <NewProductForm fireFinalActions={fireFinalActions} />
        </Container>
    )
}

export default NewProductPage