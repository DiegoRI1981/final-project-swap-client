import { Container, ListGroup, Card, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import productService from "./../../services/products.services"
import userService from "../../services/user.services";
import ProductCard from "../../components/ProductCard/ProductCard";
import adminService from "../../services/admin.services";


const ProfilePage = () => {

    const [currentUser, setCurrentUser] = useState({})
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { user_id } = useParams()
    const navigate = useNavigate()
    console.log({ user_id })

    useEffect(() => {
        loadData()
    }, [user_id])

    const loadData = () => {

        if (user_id) {
            adminService
                .userProfile(user_id)
                .then(({ data }) => setCurrentUser(data))
                .catch(err => console.log(err))
        } else {
            userService
                .profile()
                .then(({ data }) => setCurrentUser(data))
                .catch(err => console.log(err))
        }

        productService
            .getProductByOwner(user_id)
            .then(({ data }) => setProducts(data))
            .catch(err => console.log(err))


    }

    const handleDeleteProfile = () => {
        setIsLoading(true);

        userService
            .delete()
            .then(() => {
                setIsLoading(false);
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }

    return (
        <Container>
            <h3>Bienvenido a tu perfil {currentUser.firstname}</h3>
            <hr />

            <Row>
                <Col md={{ span: 4 }}>
                    <img width={300} className='ms-3' src={currentUser.profileImg} alt={currentUser.firstname} />
                </Col>
                <Col md={{ span: 8 }}>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><b>Firstname:</b> {currentUser.firstname}</ListGroup.Item>
                        <ListGroup.Item><b>Lastname:</b> {currentUser.lastname}</ListGroup.Item>
                        <ListGroup.Item><b>Email:</b> {currentUser.email}</ListGroup.Item>
                    </ListGroup>
                    <Link to={`/edit/${user_id}`}>
                        <Button variant="dark m-2">Update</Button>
                    </Link>
                    <Link>
                        <Button variant="dark m-2" onClick={handleDeleteProfile} disabled={isLoading}>
                            {isLoading ? '...' : 'Delete'}</Button>
                    </Link>
                </Col>
            </Row>

            <hr />

            <h3>Your chats</h3>
            <Link to={`/chatlist`}>
                <Button variant="dark m-2">chats</Button>
            </Link>

            <hr />

            <h3>Your products</h3>

            <Row>

                {
                    products?.map((product, idx) =>
                        <Col md={{ span: 4 }}>
                            <ProductCard {...product} />
                        </Col>
                    )
                }
            </Row>

        </Container>

    )
}

export default ProfilePage

