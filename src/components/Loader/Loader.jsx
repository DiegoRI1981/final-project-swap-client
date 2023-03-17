import { Container, Spinner } from "react-bootstrap"

const Loader = () => {
    return (
        <Container>

            <Spinner className="m-5" animation="border" role="status" variant="secondary">
                <span className="visually-hidden" > Loading...</span >
            </Spinner >
        </Container>
    )
}

export default Loader