import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {

    return (
        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h3>Login</h3>

                    <hr />

                    <LoginForm />

                </Col>
            </Row>

        </Container>
    )
}

export default LoginPage
