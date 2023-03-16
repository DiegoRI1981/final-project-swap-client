import { Card, ListGroup, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ProductCard.css'
import productService from "./../../services/products.services"
import { useState, useContext } from "react"
import { AuthContext } from "./../../contexts/auth.context"

const ProductCard = ({ imageUrl, title, wishes, _id, description, setProducts, owner }) => {

    const { user } = useContext(AuthContext)

    const [loading, setLoading] = useState(false);

    const handleDelete = (_id) => {
        setLoading(true);
        productService
            .deleteProduct(_id)
            .then(() => {
                return productService.getProductByOwner(_id)
            })
            .then(({ data }) => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }

    return (
        <Card border='dark' className='ProductCard m-3'>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <ListGroup className="list-group-flush">
                    <ListGroup.Item><b>Description:</b> {description}</ListGroup.Item>
                    <ListGroup.Item><b>Wishes:</b> {wishes}</ListGroup.Item>
                </ListGroup>

                <hr />

                <ButtonGroup style={{ width: '100%' }}>
                    <Link to={`/product-details/${_id}`} className="btn btn-dark btn-sm">Details</Link>


                    {user?._id === owner &&
                        <>

                            <Link to={`/edit-product/${_id}`} className="btn btn-dark btn-sm">Update</Link>
                            <Link className="btn btn-dark btn-sm" onClick={() => handleDelete(_id)}
                                disabled={loading} >Delete</Link>
                        </>

                    }
                </ButtonGroup>

            </Card.Body>
        </Card>
    );
}

export default ProductCard;

