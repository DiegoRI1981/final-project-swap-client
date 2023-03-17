import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './HomePage.css'



const HomePage = () => {


    return (
        <Container>
            <div className="Home">

                <h1>S W A P</h1>
                <hr />
                <h5 className="mt-4 mb-5">"Swapping is the new shopping"</h5>
                <Link to={`/products`}>
                    <Button variant="dark mt-5 btn-sm">Products galery</Button>
                </Link>

            </div>
        </Container>
    )
}

export default HomePage