import { useEffect, useState, useContext } from "react"
import { Container, Col, Card, Button, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import productService from './../../services/products.services'
import { AuthContext } from "../../contexts/auth.context"

const ProductDetailsPage = () => {

    const [product, setProduct] = useState({})

    const { product_id } = useParams()

    const { user } = useContext(AuthContext)

    useEffect(() => {
        productService
            .getOneProduct(product_id)
            .then(({ data }) => setProduct(data))
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        productService
            .getOneProduct(`/product-details/${product_id}`)
            .then(({ data }) => setProduct(data))
            .catch(error => console.error(error));
    }, [product_id])

    if (!product) {
        return <div>Loading...</div>
    }


    return (
        <Container>

            <img width={400} className='Product  mb-3 ' src={product.imageUrl} alt="" />

            <h3>{product.title}</h3>
            <hr />
            <h5>Description:</h5>
            <p>{product.description}</p>
            <hr />
            <h5>Wishes:</h5>
            <p>{product.wishes}</p>
            <hr />
            <Link to={`/products`}>
                <Button variant="dark ">Products galery</Button>
            </Link>
            {user?._id === product?.owner &&
                <Link to={`/profile`}>
                    <Button variant="dark ms-3 ">Profile</Button>
                </Link>
            }

            <Link to={`/chat/${product.owner}`}>
                <Button variant="dark ms-3">Chat</Button>
            </Link>
        </Container>

    )
}

export default ProductDetailsPage