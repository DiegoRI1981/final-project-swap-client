import { Row, Col, Container } from "react-bootstrap";
import SignupForm from "../../components/SignupForm/SignupForm";

const SignupPage = () => {

    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h3>Signup</h3>

                    <hr />

                    <SignupForm />

                </Col>
            </Row>

        </Container>

    )
}

export default SignupPage