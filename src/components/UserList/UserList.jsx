import UserCard from "../UserCard/UserCard"
import { Col, Row, Container } from "react-bootstrap"

const UsersList = ({ users }) => {
    return (
        <Container>
            <Row>
                {users.map((user) => (
                    <Col md={3} key={user._id}>
                        <UserCard {...user} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default UsersList







